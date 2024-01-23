require('dotenv').config();
const fs = require('fs');
const https = require('https');
const appRouter = require('./appRouter.js');

const PORT = process.env.PORT || 3500;

const options = {
    key: fs.readFileSync(process.env.KEY_LOCATION),
    cert: fs.readFileSync(process.env.CERT_LOCATION)
};

const server = https.createServer(options, appRouter);

function startServer () {
    server.listen(PORT, () => {
        console.log('Server listening on Port: ', PORT);
    });
};

startServer();