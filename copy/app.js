const bodyParser = require('body-parser');
const express = require('express');
const expressValidator = require('express-validator');
const mustacheExpress = require('mustache-express');

const app = express();

// const todoListArray = [{
//     'name': 'Learn Express French',
//     'completion': false,
//     'id': '0'
//   },
//   {
//     'name': 'Learn Node Basics',
//     'completion': false,
//     'id': '1'
//   },
//   {
//     'name': 'Learn Express Basics',
//     'completion': false,
//     'id': '2'
//   }, {
//     'name': 'Learn Mustache',
//     'completion': false,
//     'id': '3'
//   }, {
//     'name': 'Learn HTML forms with Express',
//     'completion': true,
//     'id': '4'
//   }, {
//     'name': 'Learn about Authentication',
//     'completion': true,
//     'id': '5'
//   }, {
//     'name': 'Learn how to connect to PostgreSQL',
//     'completion': true,
//     'id': '6'
//   }, {
//     'name': 'Learn how to connect to PostSQL from Node',
//     'completion': true,
//     'id': '7'
//   }, {
//     'name': 'Learn how to create databases',
//     'completion': true,
//     'id': '8'
//   }, {
//     'name': 'Learn SQL',
//     'completion': true,
//     'id': '8'
//   }, {
//     'name': 'Learn how to Sequalize',
//     'completion': true,
//     'id': '9'
//   }
// ]


const MongoClient = require('mongodb').MongoClient,
  assert = require('assert');
// const mongoose = require('mongoose');

// Connection URL
const url = 'mongodb://localhost:27017/todo';

let database;

// let findDocuments = function(db, callback) {
//   // Get the documents collection

// }



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(expressValidator());



// app.use('/views', express.static(path.join(__dirname, 'views')));

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

//Listening on root
app.get('/', function(req, res) {
  let collection = database.collection('todos');
  // Find some documents
  collection.find({}).toArray(function(err, todos) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(todos)
    res.render('todo', {todos: todos})
  });

})

app.post('/newTodo', function(req, res) {
      let neewbs = {}
      // console.log(req.body.WhatagooataDah)
      neewbs.name = req.body.WhatagooataDah
      neewbs.completion = false
      neewbs.id = todoListArray.length

      var collection = database.collection('todos');
      // Insert some documents
      collection.insertOne(neewbs), function(err, result) {
          console.log("Inserted 1 documents into the collection");
        }
      collection.find({}).toArray(function(err, todos) {
            assert.equal(err, null);
            res.render('todo', {todos: todos})
          });
})



    app.post('/:id', function(req, res) {
      function move(i) {todoListArray[i].completion = true;}
      move(req.params.id)
      res.redirect('/')

    })
    //   let id = parseInt(req.params.id)
    //      for (var i = 0; i < todoListArray.length; i++)
    //      {
    //           if (id === todoListArray.id)
    //           {
    //         todoListArray[i].completion=true
    //       }
    //   res.redirect('/');
    // }
    // })



    app.listen(3000, function() {
      console.log('Successfully started express application!');
    })



    MongoClient.connect(url, function(err, db) {
      assert.equal(null, err);
      console.log("Connected successfully to mongodb");
      database = db;
    }); process.on('SIGINT', function() {
      console.log("\nshutting down");
      database.close(function() {
        console.log('mongodb disconnected on app termination');
        process.exit(0);
      });
    });
