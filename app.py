from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
import os

app = Flask(__name__)
CORS(app)
model_path = os.path.join(os.path.dirname(__file__), 'model', 'ocean_lr_model.pkl')
model = joblib.load(model_path)

@app.route('/')
def home():
    return "Ocean health estimator API is running"

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.json
        salinity = float(data['Salinity'])
        temp = float(data['Temp'])
        oxygen = float(data['Oxygen'])
        depth = float(data['Depth'])

        input_array = np.array([[salinity, temp, oxygen, depth]])
        prediction = model.predict(input_array)[0]

        if prediction > 99:
            status = "Healthy"
        elif prediction > 90:
            status = "Moderate"
        else:
            status = "Unhealthy"

        return jsonify({
            'HealthScore': round(prediction, 2),
            'Status': status
        })
    
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
