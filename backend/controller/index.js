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
      res.json(200,todoitem);
    } else {
      res.send(404,`no hay con id ${id}`);
    }
  } else {
    const todos = await todo.find();
    res.json(200,todos);
  }
}

exports.todoPOSTController = (req,res) => {
  todo.create(req.body, (err, todoitem) => {
    if (err) console.log(err);
    res.json(201,todoitem);
  });  
}

exports.todoDELETEController = (req,res) => {
  todo.findOneAndDelete({"_id":req.params.id})
  .then(()=>{
    res.sendStatus(200)
  });
}

exports.todoUPDATEController = (req, res) => {
  todo.findOneAndUpdate({"_id":req.params.id}, req.body, {
    returnOriginal: false
  })
  .then(( item) => {
    res.json(200,item);
  });
}