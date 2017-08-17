const bodyParser = require('body-parser');
const express = require('express');
const expressValidator = require('express-validator');
const mustacheExpress = require('mustache-express');

const app = express();

const todoListArray = [{
    'name': 'Learn Node Basics',
    'completion': false,
    'id': '1'
  },
  {
    'name': 'Learn Express Basics',
    'completion': false,
    'id': '2'
  }, {
    'name': 'Learn Mustache',
    'completion': false,
    'id': '3'
  }, {
    'name': 'Learn HTML forms with Express',
    'completion': true,
    'id': '4'
  }, {
    'name': 'Learn about Authentication',
    'completion': true,
    'id': '5'
  }, {
    'name': 'Learn how to connect to PostgreSQL',
    'completion': true,
    'id': '6'
  }, {
    'name': 'Learn how to connect to PostSQL from Node',
    'completion': true,
    'id': '7'
  }, {
    'name': 'Learn how to create databases',
    'completion': true,
    'id': '8'
  }, {
    'name': 'Learn SQL',
    'completion': true,
    'id': '8'
  }, {
    'name': 'Learn how to Sequalize',
    'completion': true,
    'id': '9'
  }
]
const completArray = []

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
  res.render('todo', {todos: todoListArray})
})


function seanTodo(id) {
  for (var i = 0; i < todoListArray.length; i++) {
    if (id===todoListArray[i].id){
      todoListArray[i].completion=true
    }
  }
}

app.post("/results/:id", (req, res) => {
  seanTodo(req.params.id);
  //  console.log(req.params.id);
  res.redirect('/');
})
app.post('/newTodo', function(req, res) {
//   req.checkBody('WhatagooataDah', 'DO nothing?? thats fine, you can do nothing. Then say youre going to do nothing...or is that too much for you to do???').notEmpty();
//   let error = req.validationErrors()
// // console.log(validationErrors + error);
//   if (error) {
    // res.render('todo', {todos: todoListArray,
      // error: error
//    });
//   } else {
    // console.log(req.body);
    let neewbs = {}
    console.log(req.body.WhatagooataDah)
    neewbs.name = req.body.WhatagooataDah
    neewbs.completion = false
    neewbs.id = todoListArray.length
    todoListArray.push(neewbs)
    console.log(todoListArray);
    res.render('todo', {todos: todoListArray})
  //}
})

app.listen(3000, function() {
  console.log('Successfully started express application!');
})
