import http from "http";
import querystring from "querystring";
import { getAll, getItem } from "./data.js";

// import fs from "fs";

http.createServer((req, res) => {
    const url = req.url.toLowerCase();
    const path = url.split("?")[0];
    const query = url.split("?")[1];

    switch(path) {
        case '/':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(JSON.stringify(getAll()));
            break;    
        
        case '/about':        
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('About me: Hi, my name is Jiae, I\'m currently attending a Web development program in Seattle Central College.');        
            break; 

        case '/detail':        
            let queryObject = querystring.parse(query);
            const item = getItem(queryObject.name);
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(JSON.stringify(item));   
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Sorry, page not found');
            break;
    }
}).listen(process.env.PORT || 3000);
