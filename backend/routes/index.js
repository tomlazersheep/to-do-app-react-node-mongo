const router = require("express").Router();

//import controllers
const controllers = require("../controller");

router.get("/", controllers.indexController);

//export router object to use on main index.js
module.exports = router;