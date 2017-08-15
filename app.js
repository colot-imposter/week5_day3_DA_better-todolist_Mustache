const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');

const app = express();
const todoListArray = [{
    'name': 'Learn Node Basics',
    'completion': false
  },
  {
    'name': 'Learn Express Basics',
    'completion': false
  }, {
    'name': 'Learn Mustache',
    'completion': false
  }, {
    'name': 'Learn HTML forms with Express',
    'completion': true
  }, {
    'name': 'Learn about Authentication',
    'completion': true
  }, {
    'name': 'Learn how to connect to PostgreSQL',
    'completion': true
  }, {
    'name': 'Learn how to connect to PostSQL from Node',
    'completion': true
  }, {
    'name': 'Learn how to create databases',
    'completion': true
  }, {
    'name': 'Learn SQL',
    'completion': true
  }, {
    'name': 'Learn how to Sequalize',
    'completion': true
  }
]

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

//Listening on root
app.get('/todo', function(req, res) {
  res.render('todo', {
    todos: todoListArray
  })
})

app.listen(3000, function() {
  console.log('Successfully started express application!');
})
