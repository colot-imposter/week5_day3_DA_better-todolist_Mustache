const bodyParser = require('body-parser');
const express = require('express');
const expressValidator = require('express-validator');
const mustacheExpress = require('mustache-express');

const app = express();

const todoListArray = [{
    'name': 'Learn Node Basics',
    'completion': false,
    'id' : '1'
  },
  {
    'name': 'Learn Express Basics',
    'completion': false,
    'id' : '2'
  }, {
    'name': 'Learn Mustache',
    'completion': false,
    'id' : '3'
  }, {
    'name': 'Learn HTML forms with Express',
    'completion': true,
    'id' : '4'
  }, {
    'name': 'Learn about Authentication',
    'completion': true,
    'id' : '5'
  }, {
    'name': 'Learn how to connect to PostgreSQL',
    'completion': true,
    'id' : '6'
  }, {
    'name': 'Learn how to connect to PostSQL from Node',
    'completion': true,
    'id' : '7'
  }, {
    'name': 'Learn how to create databases',
    'completion': true,
    'id' : '8'
  }, {
    'name': 'Learn SQL',
    'completion': true,
    'id' : '8'
  }, {
    'name': 'Learn how to Sequalize',
    'completion': true,
    'id' : '9'
  }
]
const completArray = []

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());



// app.use('/views', express.static(path.join(__dirname, 'views')));

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

//Listening on root
app.get('/', function(req, res) {
  res.render('todo', {
    todos: todoListArray
  })
})





function seanTodo(i) {
  todoListArray[i].completion = !todoListArray[i].completion;
}

app.post("/results/:id", (req, res) => {
  // push todo onto complete, pop that todo
  // console.log(todoListArray);
  seanTodo(req.params.id);
  //  console.log(req.params.id);
   res.redirect('/');
 })
app.post('/newTodo', function(req, res){
  req.checkBody('WhatagooataDah', 'DO nothing?? thats fine, you can do nothing. Then say youre going to do nothing...or is that too much for you to do???').notEmpty();
  let error = validationErrors()

  if(error)
  {res.redirect('')}
  else{
  // console.log(req.body);
  let neewbs = {}
  console.log(req.body.WhatagooataDah)
  neewbs.name= req.body.WhatagooataDah
  neewbs.completion= false
  neewbs.id = todoListArray.length
  todoListArray.push(neewbs)
  console.log(todoListArray);
  res.redirect('/')
}}
)

app.listen(3000, function() {
  console.log('Successfully started express application!');
})
