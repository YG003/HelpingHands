var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('/views/signup.html')
});

module.exports = router;
