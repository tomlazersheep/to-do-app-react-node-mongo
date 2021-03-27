const todo = require("../models/ToDoItem");

exports.indexController = async (req,res) => {
  const todos = await todo.find();
  
  res.send(todos);
}