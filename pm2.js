const { execSync } = require('child_process');

try {
    // Execute the command and capture the output
    const output = execSync('pm2 list').toString();
    
    // Log the output
    console.log(output);
} catch (err) {
    // Log the error if something goes wrong
    console.error('Error executing command:', err.message);
}