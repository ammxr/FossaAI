import os
import django
from django.conf import settings
from django.db.models.functions import Lower
import pandas as pd
from sklearn.model_selection import train_test_split
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow.keras.layers import Input, Embedding, LSTM, Dense
from tensorflow.keras.models import Model
import tensorflow.keras.backend as K
import numpy as np
import os
import django

def recommendation():
    # Set the DJANGO_SETTINGS_MODULE environment variable
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "django_backend.settings")
    django.setup()

    # Placeholder code for importing Django models
    from api.models import FossaStore

    # Fetch data from the database
    data = FossaStore.objects.all()

    # Converting data to lowercase
    data = data.annotate(lower_product_name=Lower('product_name'), lower_description=Lower('product_description'))

    # Convert Django QuerySet to a Pandas DataFrame
    data_df = pd.DataFrame(data.values())

    # Splitting Data into Train and Test Sets (80% training)
    train_data, test_data = train_test_split(data_df, test_size=0.2, random_state=42)

    # Tokenizing to make text data comparable
    tokenizer = Tokenizer()
    tokenizer.fit_on_texts(train_data['lower_description'])  # Adjust column name

    train_sequences = tokenizer.texts_to_sequences(train_data['lower_description'])
    max_sequence_length = max(len(seq) for seq in train_sequences)
    train_sequences_padded = pad_sequences(train_sequences, maxlen=max_sequence_length, padding='post')

    # ML Model

    input_layer = Input(shape=(max_sequence_length,))
    embedding_layer = Embedding(input_dim=len(tokenizer.word_index) + 1, output_dim=100)(input_layer)
    lstm_layer = LSTM(128)(embedding_layer)
    dense_layer = Dense(128, activation='relu')(lstm_layer)
    output_layer = Dense(128)(dense_layer)
    siamese_model = Model(inputs=input_layer, outputs=output_layer)

    def contrastive_loss(y_true, y_pred):
        margin = 1.0
        return K.mean(y_true * K.square(y_pred) + (1 - y_true) * K.square(K.maximum(margin - y_pred, 0.0)))

    siamese_model.compile(loss=contrastive_loss, optimizer='adam')

    train_product_categories = train_data['lower_product_name'].apply(lambda x: x.split()[0])
    y_train_labels = (train_product_categories == 'gardening').astype(int)
    y_train_labels = y_train_labels.astype(float)

    siamese_model.fit(train_sequences_padded, y_train_labels, batch_size=64, epochs=10)

    # Input Product
    input_product_name = "garden hose"

    input_product_sequence = tokenizer.texts_to_sequences([input_product_name])
    input_product_sequence_padded = pad_sequences(input_product_sequence, maxlen=max_sequence_length, padding='post')

    input_product_embedding = siamese_model.predict(input_product_sequence_padded)


    most_similar_product = None
    max_similarity = -1

    for product in data:
        product_sequence = tokenizer.texts_to_sequences([product.lower_product_name])
        product_sequence_padded = pad_sequences(product_sequence, maxlen=max_sequence_length, padding='post')
        product_embedding = siamese_model.predict(product_sequence_padded)

        similarity = np.dot(input_product_embedding, product_embedding.T) / (
            np.linalg.norm(input_product_embedding) * np.linalg.norm(product_embedding)
        )

        if similarity > max_similarity:
            max_similarity = similarity
            most_similar_product = product

    print("Input product:", input_product_name)
    print("Recommended similar product:", most_similar_product.lower_product_name)
    print("Recommended similar product link:", most_similar_product.product_link)
    return most_similar_product.lower_product_name, most_similar_product.product_link