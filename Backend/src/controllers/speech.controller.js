// controllers/speech.controller.js

import { spawn } from 'child_process';
import path from 'path';

const scriptsDirectory = 'D:/Desktop/My Web Apps/SmartLearnerKids/Backend/src/python_scripts/';

export function recordAudio() {
  return new Promise((resolve, reject) => {
    const pythonProcess = spawn('python', [path.join(scriptsDirectory, 'record_mic.py')]);

    pythonProcess.stdout.on('data', (data) => {
      console.log(`record stdout: ${data}`);
    });

    pythonProcess.stderr.on('data', (data) => {
      console.error(`record stderr: ${data}`);
      reject(data);
    });

    pythonProcess.on('close', (code) => {
      console.log(`record child process exited with code ${code}`);
      if (code === 0) {
        resolve();
      } else {
        reject(`record Exited with code ${code}`);
      }
    });
  });
}

export const transcribeAudio = (filename) => {
  return new Promise((resolve, reject) => {
    const pythonProcess = spawn('python', [path.join(scriptsDirectory, 'speech_recogination.py'), filename]);

    let transcribedText = '';

    pythonProcess.stdout.on('data', (data) => {
      transcribedText += data.toString();
    });

    pythonProcess.stderr.on('data', (data) => {
      console.error(`transcribe stderr: ${data}`);
      reject(data);
    });

    pythonProcess.on('close', (code) => {
      console.log(`transcribe child process exited with code ${code}`);
      if (code === 0) {
        console.log(transcribedText)
        resolve(transcribedText);
      } else {
        reject(`transcribe Exited with code ${code}`);
      }
    });
  });
}

// export const main = async () => {
//   try {
//     await recordAudio();
//     const transcribedText = await transcribeAudio("output.wav");
//     console.log('Transcribed Text:', transcribedText);
//     return transcribedText; 
//   } catch (error) {
//     console.error('Error:', error);
//     throw error; 
//   }
// }
