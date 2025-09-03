"use strict";
// Bai 25: Simulate downloading a file in 3 seconds and log when done
function downloadFile(filename) {
    console.log(`Downloading ${filename}...`);
    setTimeout(() => {
        console.log(`${filename} downloaded!`);
    }, 3000);
}
downloadFile('test.txt');
