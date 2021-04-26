// import querystring from "querystring";
// import { getAll, getItem } from "./data.js";

'use strict'
const express = require("express");
// const bodyParser = require("body-parser")
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public')); // set location for static files
// app.use(bodyParser.urlencoded({extended: true})); // parse form submissions

let exphbs = require("express-handlebars");
app.engine('handlebars', exphbs({defaultLayout: false}));
app.set("view engine", "handlebars");

const { getAll, getItem } = require("./data.js");

app.get('/', (req, res) => {
    let coffeeMachineList = getAll();
    res.render('home', { data: coffeeMachineList });
});

app.get('/detail', (req, res) => {
    let machineItem = getItem(req.query.name);
    res.render('detail', { item: machineItem });
})

app.get('/about', (req, res) => {
    res.type('text/plain');
    res.send('About page');
});



// define 404 handler
app.use((req,res) => {
    res.type('text/plain'); 
    res.status(404);
    res.send('404 - Not found');
});

app.listen(app.get('port'), () => {
    console.log('Express started'); 
});




// http.createServer((req, res) => {
//     const url = req.url.toLowerCase();
//     const path = url.split("?")[0];
//     const query = url.split("?")[1];

//     switch(path) {
//         case '/':
//             res.writeHead(200, {'Content-Type': 'text/plain'});
//             res.end(JSON.stringify(getAll()));
//             break;    
        
//         case '/about':        
//             res.writeHead(200, {'Content-Type': 'text/plain'});
//             res.end('About me: Hi, my name is Jiae, I\'m currently attending a Web development program in Seattle Central College.');        
//             break; 

//         case '/detail':      
//             let queryObject = querystring.parse(query);
//             const item = getItem(queryObject.name);
//             res.writeHead(200, {'Content-Type': 'text/plain'});
//             res.end(JSON.stringify(item));   
//             break;
//         default:
//             res.writeHead(404, {'Content-Type': 'text/plain'});
//             res.end('Sorry, page not found');
//             break;
//     }
// }).listen(process.env.PORT || 3000);
