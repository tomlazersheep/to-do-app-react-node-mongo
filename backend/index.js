const express = require('express');
const mongoose = require("mongoose");


// set mongoose parameters to avoid error
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

//connect to mongo local db called "todolist"
mongoose.connect("mongodb://localhost/todolist")
.then(()=>{
  console.log("connected ok");
})
.catch((err)=> {
  console.log("ERROR: ", err);
});


//create express app
const app = express();

//import routes from routes dir
const routes = require("./routes");
// set router to handle every route
app.use("/", routes);


//start server on port 3001
app.listen(3001);