# Import necessary libraries
import pandas as pd
import pickle
from flask import Flask, jsonify, request
from flask_cors import CORS

# Create a Flask app
app = Flask(__name__)
CORS(app)

# Load the trained model and data
data = pd.read_csv('Cleaned_Housedata.csv')
pipe = pickle.load(open("RidgeHouseModel.pkl", 'rb'))

# Define the predict route for making predictions
@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get input data from the JSON request
        data = request.get_json()

        # Extract input values from JSON data
        location = data['location']
        bhk = float(data['bhk'])
        bath = float(data['bath'])
        total_sqft = float(data['total_sqft'])

        # Create a DataFrame with the input data
        input_data = pd.DataFrame([[location, total_sqft, bath, bhk]],
                                  columns=['location', 'total_sqft', 'bath', 'bhk'])

        # Make a prediction using the trained model
        prediction = pipe.predict(input_data)[0]
       

        # Return the prediction as a JSON response
        return jsonify({'prediction': float(round(prediction,2))})
    
    except Exception as e:
        # Handle any exceptions and return an error
        return jsonify({'error': str(e)})

# Run the Flask app
if __name__ == "__main__":
    app.run(debug=True, port=5001)
