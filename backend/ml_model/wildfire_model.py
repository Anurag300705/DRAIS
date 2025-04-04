import sys
import subprocess
import importlib

def install_dependencies():
    required = {'numpy', 'pandas', 'sklearn'}
    for package in required:
        try:
            importlib.import_module(package)
        except ImportError:
            print(f"Installing {package}...", file=sys.stderr)
            subprocess.check_call([sys.executable, "-m", "pip", "install", package])

install_dependencies()

import os
import pickle
import json
import numpy as np
from pathlib import Path

# Constants
MODEL_PATH = Path(__file__).parent / "wildfire_model.pkl"
REQUIRED_FEATURES = [
    'Temperature',
    'Humidity',
    'Wind_Speed',
    'Precipitation',
    'Vegetation_Density',
    'Fire_Spread_Rate',
    'Air_Quality_Index',
    'Topography_Slope'
]

def load_model():
    """Load the trained model with error handling"""
    if not MODEL_PATH.exists():
        raise FileNotFoundError(f"Model file not found at {MODEL_PATH}")
    
    with open(MODEL_PATH, 'rb') as f:
        try:
            return pickle.load(f)
        except Exception as e:
            raise ValueError(f"Failed to load model: {str(e)}")

def validate_input(input_data):
    """Validate input structure and values"""
    if not isinstance(input_data, dict):
        raise ValueError("Input must be a dictionary")
    
    missing = [f for f in REQUIRED_FEATURES if f not in input_data]
    if missing:
        raise ValueError(f"Missing required features: {missing}")
    
    for feature, value in input_data.items():
        if not isinstance(value, (int, float)):
            raise ValueError(f"Value for {feature} must be numeric")

def predict_burn_area(model, input_data):
    """Make prediction and return burn area"""
    try:
        # Create input array in correct feature order
        input_array = np.array([[input_data[f] for f in REQUIRED_FEATURES]], dtype=np.float32)
        
        # For regression models
        if hasattr(model, 'predict'):
            return model.predict(input_array)[0]
        else:
            raise ValueError("Model doesn't support prediction")
    except Exception as e:
        raise ValueError(f"Prediction failed: {str(e)}")

def main():
    try:
        # 1. Load input data
        input_data = json.loads(sys.argv[1])
        
        # 2. Validate input
        validate_input(input_data)
        
        # 3. Load model
        model = load_model()
        
        # 4. Make prediction
        burn_area = predict_burn_area(model, input_data)
        
        # 5. Return result as JSON
        print(json.dumps({
            "burn_area": float(burn_area),
            "status": "success"
        }))
        
    except Exception as e:
        print(json.dumps({
            "status": "error",
            "message": str(e)
        }), file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    main()