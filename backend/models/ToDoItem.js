const mongoose = require("mongoose");

const ToDoSchema = new mongoose.Schema({
  title: String,
  completed: Boolean,
});

module.exports = mongoose.model("todo", ToDoSchema);