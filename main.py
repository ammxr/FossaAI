import pandas as pd
from sklearn.model_selection import train_test_split
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow.keras.layers import Input, Embedding, LSTM, Dense
from tensorflow.keras.models import Model
import tensorflow.keras.backend as K
import numpy as np

# Temporary sample (Will later be a large DB of products)
data = pd.read_csv('sample.csv')

data['product_name'] = data['product_name'].str.lower()
data['description'] = data['description'].str.lower()

# Splitting Data into Train and Test Sets (80% training)
train_data, test_data = train_test_split(data, test_size=0.2, random_state=42)

# Tokenizing to make text data comparable
tokenizer = Tokenizer()
# Creates dictionary word_index of present words (keys) assigned to unique values where the lowest value is the most frequent word
tokenizer.fit_on_texts(train_data['description'])
# Total vocab size based off previous dictionary
vocab_size = len(tokenizer.word_index) + 1

# Uses vocab dict to translate description text to a sequence (list) of integers placed collectively in a list 
train_sequences = tokenizer.texts_to_sequences(train_data['description'])

# To make all sequences the same length (for neural network), we pad the sequences with 0s
max_sequence_length = max(len(seq) for seq in train_sequences)
train_sequences_padded = pad_sequences(train_sequences, maxlen=max_sequence_length, padding='post')

# ML Model

# 1 Dimensional Input layer (since sequences are 1D arrays)
input_layer = Input(shape=(max_sequence_length,))

# Embedding layer to create word embeddings (tokenizing)
embedding_layer = Embedding(input_dim=vocab_size, output_dim=100)(input_layer)

# LSTM layer for sequence processing with memory from previous words
lstm_layer = LSTM(128)(embedding_layer)

# Dense (fully connected layer) + filters out irrelevant data
dense_layer = Dense(128, activation='relu')(lstm_layer)
output_layer = Dense(128)(dense_layer)
# Proceeding to model
siamese_model = Model(inputs=input_layer, outputs=output_layer)

# Loss calculation
def contrastive_loss(y_true, y_pred):
    margin = 1.0
    return K.mean(y_true * K.square(y_pred) + (1 - y_true) * K.square(K.maximum(margin - y_pred, 0.0)))

# Compiling model and using Adam optimizer
siamese_model.compile(loss=contrastive_loss, optimizer='adam')

# Placeholder code for generating training labels
train_product_categories = train_data['product_name'].apply(lambda x: x.split()[0])
y_train_labels = (train_product_categories == 'gardening').astype(int)
y_train_labels = y_train_labels.astype(float)

# Training the model
siamese_model.fit(train_sequences_padded, y_train_labels, batch_size=64, epochs=10)

# Input Product
input_product_name = "flowers"

# Process the input product name to generate the numerical sequence based off learned vocabulary + Pad to max length
input_product_sequence = tokenizer.texts_to_sequences([input_product_name])
input_product_sequence_padded = pad_sequences(input_product_sequence, maxlen=max_sequence_length, padding='post')

# Generate the embedding vector for the input product
input_product_embedding = siamese_model.predict(input_product_sequence_padded)

similarities = []
for product in data['product_name']:
    # Generating numerical sequence + Padding for each product
    product_sequence = tokenizer.texts_to_sequences([product])
    product_sequence_padded = pad_sequences(product_sequence, maxlen=max_sequence_length, padding='post')
    
    product_embedding = siamese_model.predict(product_sequence_padded)
    
    # Calculate cosine similarity
    similarity = np.dot(input_product_embedding, product_embedding.T) / (np.linalg.norm(input_product_embedding) * np.linalg.norm(product_embedding))
    similarities.append(similarity)
    print(similarities)

most_similar_index = np.argmax(similarities)
most_similar_product = data.loc[most_similar_index, 'product_name']

print("Input product:", input_product_name)
print("Recommended similar product:", most_similar_product)
