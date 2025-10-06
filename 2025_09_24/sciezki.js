let http = require('http');
let fs = require('fs');
let url = require('url');
const server = http.createServer(function (req, res) {
    switch(req.url){
        case "/":
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write('Strona glowna!');
            res.end();
            break;
        case "/login":
            const parsedUrl = url.parse("package.json", true);
            const pathname = parsedUrl.pathname;
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({
                pathname
            }, null, 2));
            break;
        case "/page1":
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end('<!DOCTYPE html>' +
                '<html>' +
                '<head><title>Page1</title>' +
                '<meta charset="utf-8">' +
                '<meta name="viewport" content="width=device-width, initial-scale=1.0">'+
                '</head>'+
                '<body><p>Strona html</p></body>');
            break;
        case "/page2":

            res.writeHead(200, {'Content-Type': 'text/html'});
            const file = fs.readFileSync("page2.html","utf-8");
            res.end(file.toString());
            break;

    }
});
server.listen(8080);
