const { spawn } = require('child_process');
const path = require('path');

// const PYTHON_PATH = 'C:\\Users\\ASUS\\AppData\\Local\\Programs\\Python\\Python312\\python.exe';
const predict = (input) => {
  return new Promise((resolve, reject) => {
    const pythonProcess = spawn('python3', [
      path.join(__dirname, 'predict.py'),
      JSON.stringify(input)
    ]);

    let stdout = '';
    let stderr = '';

    pythonProcess.stdout.on('data', (data) => stdout += data.toString());
    pythonProcess.stderr.on('data', (data) => stderr += data.toString());

    pythonProcess.on('close', (code) => {
      if (code === 0) {
        try {
          resolve(JSON.parse(stdout));
        } catch (e) {
          reject(new Error(`Failed to parse output: ${e.message}`));
        }
      } else {
        reject(new Error(
          `Python script failed (code ${code})\n` +
          `Error output: ${stderr || 'No error message'}`
        ));
      }
    });
  });
};

module.exports = { predict };
