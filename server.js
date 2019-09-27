var express = require('express');
var exphbs = require("express-handlebars");
var mysql = require("mysql");

var app = express(); 

var PORT = process.env.PORT || 4040; 

// Whenever you do post from client to server you need these to lines.. body parse was older version... this is current version... Sets up the express app to handle data parsing 
app.use(express.urlencoded({extended: true}));
app.use(express.json()); 

// handles data displayed by different urls 
app.engine("handlebars", exphbs({defaultLayout: "main"})); 
app.set("view engine", "handlebars")

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "12345678",
    database: "task_saver_db"
  });

connection.connect(function(err) {
if (err) {
    console.error("error connecting: " + err.stack);
    return;
}
console.log("connected as id " + connection.threadId);
});
  
// Root get route
app.get("/", function(req, res) {
    connection.query("SELECT * FROM tasks;", function(err, data) {
      if (err) throw err;
  
      // Test it
      console.log('The solution is: ', data);
  
      // Test it
    //   return res.send(data);
  
      res.render("index", { tasks: data });
    });
  });

  // Post route -> back to home
app.post("/", function(req, res) {
    // Test it
    console.log('You sent, ' + req.body.task);
  
    // Test it
    // return res.send('You sent, ' + req.body.task);
  
    // When using the MySQL package, we'd use ?s in place of any values to be inserted, which are then swapped out with corresponding elements in the array
    // This helps us avoid an exploit known as SQL injection which we'd be open to if we used string concatenation
    // https://en.wikipedia.org/wiki/SQL_injection
    connection.query("INSERT INTO tasks (task) VALUES (?)", [req.body.task], function(err, result) {
        // name = tasks in index.handle bars so ? is getting replaced with tasks data 
      if (err) throw err;
  
      res.redirect("/");
    });
  });
  

app.listen(PORT, ()=> {
    console.log("Server listening on: http://localhost:" + PORT);
});