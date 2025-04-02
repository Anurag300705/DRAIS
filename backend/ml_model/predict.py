import os
import pickle
import sys
import json
import numpy as np
from pathlib import Path
import pandas as pd

# Get absolute path to model.pkl
MODEL_PATH = Path(__file__).parent / "model.pkl"

try:
    if not MODEL_PATH.exists():
        raise FileNotFoundError(f"Model file not found at {MODEL_PATH}")

    with open(MODEL_PATH, 'rb') as f:
        model = pickle.load(f)
    
    input_data = json.loads(sys.argv[1])
    input_array = np.array(input_data).reshape(1, -1)
    prediction = model.predict(input_array).tolist()
    print(json.dumps(prediction))
    
except Exception as e:
    print(f"ERROR: {str(e)}", file=sys.stderr)
    sys.exit(1)