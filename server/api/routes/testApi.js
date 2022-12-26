var Express = require("express");
var router = Express.Router();
router.get('/',function(req,res,next){
    res.send("api working propely");



});

module.exports = router;