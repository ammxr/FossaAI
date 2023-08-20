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