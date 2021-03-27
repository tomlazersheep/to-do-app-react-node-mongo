const router = require("express").Router();

//import controllers
const controllers = require("../controller");

router.get("/", controllers.indexGETController);

// Create todos
router.post("/todo", controllers.todoPOSTController);
// Read Todos
router.get("/todo/:id", controllers.todoGETController);
router.get("/todo", controllers.todoGETController);
// Delete Todos
router.delete("/todo/:id", controllers.todoDELETEController);
// Update Todos
router.put("/todo/:id", controllers.todoUPDATEController);


//export router object to use on main index.js
module.exports = router;