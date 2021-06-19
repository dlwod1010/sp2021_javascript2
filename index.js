'use strict'
import express from 'express';
import exphbs from "express-handlebars"
// import ejs from 'ejs';
import { Machine } from "./models/machine.js";
import cors from 'cors';

const app = express();

app.engine("handlebars", exphbs({defaultLayout: false}));
// app.engine('html', ejs.renderFile);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);
app.use(express.static('./public')); // set location for static files
app.use('/api', cors());
app.use(express.json());//Use to parse JSON bodies

app.get('/', (req, res) => {
    Machine.find({}).lean().then((coffeeMachineList) => {
        res.render('home', { data: JSON.stringify(coffeeMachineList) })
    });    
});

app.get('/detail', (req, res, next) => {
    Machine.findOne({ name: req.query.name }).lean().then((machineItem) => {
        res.render('detail', { item: machineItem, searchingItem: req.query.name})
    })
    .catch(err => next(err));
});

app.get('/about', (req, res) => {
    res.type('text/plain');
    res.send('About me: Hi, my name is Jiae, I\'m currently attending a Web development program in Seattle Central College.');
}); 

//api routes
app.get('/api/machinelist', (req, res) => {
    Machine.find({}).lean().then((coffeeMachineList) => {
        res.json(coffeeMachineList);
    })
});

app.get('/api/machinelist/itemdetail/:name', (req, res, next) => {
    Machine.findOne({ name: req.params.name }).lean().then((machineItem) => {
        res.json(machineItem);
    })
    .catch(err => next(err));
});
     
app.post('/api/machinelist/additem', (req, res, next) => {
    const machineToAdd = req.body;
    Machine.create(machineToAdd).then((addedItem) => {
        res.json(addedItem);      
    })
    .catch(err => next(err));
});

app.put('/api/machinelist/:id', async (req, res, next) => {
    const myQuery = {_id: req.params.id};
    const newValues = {
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        price: req.body.price,
        feature: req.body.feature
    };
    const result = await Machine.updateOne(myQuery, newValues);
    res.json({ updated: result.nModified, _id: req.body._id });
});

app.delete('/api/machinelist/:id', (req, res, next) => {
    console.log('delete');
    Machine.deleteOne({ _id: req.params.id }).then((deletedItem) => {
        res.json({
            ok: deletedItem.ok === 1,
            deletedCount: deletedItem.deletedCount
        });
    })
    .catch(err => next(err));
});

app.get('/about', (req, res) => {
    res.type('text/plain');
    res.send('About me: Hi, my name is Jiae, I\'m currently attending a Web development program in Seattle Central College.');
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

