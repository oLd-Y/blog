const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

function downloadImage(url, localPath) {
    return new Promise((resolve, reject) => {
        const protocol = url.startsWith('https') ? https : http;
        const file = fs.createWriteStream(localPath);

        const request = protocol.get(url, (response) => {
            if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
                // Handle redirect
                return downloadImage(response.headers.location, localPath).then(resolve).catch(reject);
            } else if (response.statusCode !== 200) {
                reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
                return;
            }

            response.pipe(file);

            file.on('finish', () => {
                file.close(resolve);
            });
        });

        request.on('error', (err) => {
            fs.unlink(localPath, () => reject(err));
        });

        file.on('error', (err) => {
            fs.unlink(localPath, () => reject(err));
        });
    });
}

module.exports = downloadImage;
