const { exec } = require('child_process');

const commands = [
  'npm install',
  'ng build --configuration production',
  'node server.js'
];

function runCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing ${command}:`, error);
        reject(error);
        return;
      }
      console.log(stdout);
      resolve();
    });
  });
}

async function deploy() {
  for (const command of commands) {
    try {
      await runCommand(command);
    } catch (error) {
      console.error('Deployment failed');
      process.exit(1);
    }
  }
  console.log('Deployment completed successfully');
}

deploy();