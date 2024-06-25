const fs = require('fs');
const https = require('https');
const path = require('path');

async function downloadImage(url, folderPath) {
    const fileName = path.basename(url);
    const filePath = path.join(folderPath, fileName);

    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(filePath);
        https.get(url, (response) => {
            response.pipe(file);
            file.on('finish', () => {
                file.close(() => resolve(filePath));
            });
        }).on('error', (err) => {
            fs.unlink(filePath, () => reject(err.message));
        });
    });
}

module.exports = async (tp, url, folderPath) => {
    return await downloadImage(url, folderPath);
};
