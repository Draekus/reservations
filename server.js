// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let tables = {
reservations: [{
      name: "pat",
      phone: "7812134567",
      email: "pat@aol.com",
      id: 1243
    },
    {
      name: "stan",
      phone: "7812345232",
      email: "stan@aol.com",
      id: 6776
    },
    {
      name: "mark",
      phone: "9112134567",
      email: "mark@aol.com",
      id: 8888
    }
  ],

waiting: [
    {
      name: "leslie",
      phone: "9112134567",
      email: "mark@aol.com",
      id: 8888
    }
]}

app.get("/", function(req, res) {
// res.send("Welcome to the Star Wars Page!")
res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "tables.html"));
  });

app.get("/reservations", function(req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "reservations.html"));
  });

app.get("/api/tables", function(req, res) {
return res.json(tables);
});  



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

app.post("/api/tables", function(req, res) {
// req.body hosts is equal to the JSON post sent from the user
// This works because of our body parsing middleware
var newTable = req.body;


// We then add the json the user sent to the character array
if (tables.reservations.length < 5) {
    tables.reservations.push(newTable);
    console.log(`tables: ${newTable}`);
}

else {
    tables.waiting.push(newTable);
    console.log(`waiting: ${newTable}`);
}
// We then display the JSON to the users
res.json(newTable);
});

