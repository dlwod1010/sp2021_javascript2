const http = require("http");
const fs = require("fs"); //fs-> file system module
const path = require('path');

http.createServer((req, res) => {
    switch(req.url) {
        case '/':
            fs.readFile("index.html", function(err, data) {
                if (err) {
                    return console.error(err);
                }
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data.toString());
            });
            break;
        case '/about':
            fs.readFile("about.html", function(err, data) {
                if (err) {
                    return console.error(err);
                }
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data.toString());
            });
            break;
        case (req.url.match(/\.css$/) || {}).input:
            var cssPath = path.join(__dirname, 'public', req.url);
            var fileStream = fs.createReadStream(cssPath, "UTF-8");
            res.writeHead(200, {"Content-Type": "text/css"});
            fileStream.pipe(res);
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Sorry, page not found');
            break;
    }
}).listen(process.env.PORT || 3000);
