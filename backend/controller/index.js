const todo = require("../models/ToDoItem");

exports.indexGETController = async (req,res) => {
  const todos = await todo.find();
  
  res.send(todos);
}

exports.todoGETController = async (req,res) => {
  console.log("received a GET on /todo");
  if (req.params.id) {
    const id = req.params.id;
    const todoitem = await todo.findOne({"_id":id});
    if (todoitem) {
      res.send(200,todoitem);
    } else {
      res.send(404,`no hay con id ${id}`);
    }
  } else {
    const todos = await todo.find();
    res.send(200,todos);
  }
}

exports.todoPOSTController = async (req,res) => {
  todo.create(req.body, (err, todoitem) => {
    if (err) console.log(err);
    console.log(todoitem);
    res.sendStatus(201);
  });  
}

exports.todoDELETEController = (req,res) => {
  todo.findOneAndDelete({"_id":req.params.id})
  .then(()=>{
    res.send(200)
  });
}

exports.todoUPDATEController = (req, res) => {
  todo.findOneAndUpdate({"_id":req.body.id}, req.body)
  .then(() => {
    res.send(200);
  });
}