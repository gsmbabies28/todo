var express = require('express');
var router = express.Router();
const tasks = require('./tasks.js')
/* GET home page. */

router.get("/",(req,res) => {
    res.send("Welcome")
})

router.use("/api", tasks)

module.exports = router;
