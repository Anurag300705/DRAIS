const { spawn } = require('child_process');
const path = require('path');

// Use absolute path to your Python executable
const PYTHON_PATH = 'C:\\Users\\ASUS\\AppData\\Local\\Programs\\Python\\Python312\\python.exe';

const predictWildfire = async (inputData) => {
    return new Promise((resolve, reject) => {
        console.log(`Using Python at: ${PYTHON_PATH}`);
        
        const pythonProcess = spawn(PYTHON_PATH, [
            path.join(__dirname, 'wildfire_model.py'),
            JSON.stringify(inputData)
        ]);

        let stdout = '';
        let stderr = '';

        pythonProcess.stdout.on('data', (data) => stdout += data.toString());
        pythonProcess.stderr.on('data', (data) => stderr += data.toString());

        pythonProcess.on('close', (code) => {
            if (code === 0) {
                try {
                    const result = JSON.parse(stdout);
                    if (result.status === 'error') {
                        throw new Error(result.message);
                    }
                    resolve(result.burn_area);
                } catch (e) {
                    reject(new Error(`Output parse failed: ${e.message}`));
                }
            } else {
                reject(new Error(`Python error (code ${code}): ${stderr || stdout}`));
            }
        });
    });
};

module.exports = { predictWildfire };