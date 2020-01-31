// const { exec } = require('child_process');
// exec('ls', (err, stdout, stderr) => {
//   if (err) {
//     //some err occurred
//     console.error(err)
//   } else {
//    // the *entire* stdout and stderr (buffered)
//    console.log(`stdout: ${stdout}`);
//    console.log(`stderr: ${stderr}`);
//   }
// });

// const execSync = require('child_process').execSync;
// // import { execSync } from 'child_process';  // replace ^ if using ES modules
// const output = execSync('ls', { encoding: 'utf-8' });  // the default is 'buffer'
// console.log('Output was:\n', output);

// var shell = WScript.CreateObject("WScript.Shell");
// shell.Run("ls");

var process = require('child_process');
process.exec('dir',function (err,stdout,stderr) {
    if (err) {
        console.log("\n"+stderr);
    } else {
        console.log(stdout);
    }
});