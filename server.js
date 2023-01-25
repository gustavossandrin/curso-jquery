const express = require('express');
const nedb = require('nedb');
const bodyParser = require('body-parser');
const db = new nedb({ filename: './database.db', autoload: true});
const cors = require('cors')

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false}))

app.get('/books', (req, res) => {

    db.find({}, (err, books) =>{
        res.json(books)
    })

    
})

app.post('/books', (req, res) => {

    db.insert({
        name: req.body.name,
        author: req.body.author,
    }, (err, doc) => {
        res.json(doc)
    });
    
});

app.post('/books/:id', (req, res) => {

    db.remove({
        _id: req.params.id
    }, (err, doc) => {
        res.json({
            success: true
        })
    });
    
});

app.listen(3000, () => {
    console.log('Servidor executado com sucesso')
})