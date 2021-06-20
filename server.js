

const express = require('express');
const https = require('https');
const fs = require('fs');
const port = 3000;
const dirSSL = '/home/britta/Dokumente/sslcert/'

var key = fs.readFileSync(dirSSL + 'selfsigned.key');
var cert = fs.readFileSync(dirSSL + 'selfsigned.crt');
var options = {
  key: key,
  cert: cert
};

app = express();

app.use(express.static('./dist/mensa'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/mensa/'}),
);
var server = https.createServer(options, app);

server.listen(port, () => {
  console.log("server starting on port : " + port)
});