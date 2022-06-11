const http = require('http');
const fs = require('fs');
const url = require('url');

const mod1 = require('./mmodule/libs');
const config = require('./mmodule/config');

function readFileHtml(filePath, req, res) {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.write('File not Found!');
        }
        else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
        };
        res.end();
    });
}

function onRequest(req, res) {
    const pathName = url.parse(req.url).pathname;
    if (pathName == '/about') {
        readFileHtml('./views/About.html', req, res);
    }
    else {
        readFileHtml('./views/Home.html', req, res);
    }
    
}

http.createServer(onRequest).listen(config.port);
