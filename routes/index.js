var express = require('express');
var router = express.Router();
const userModel=require('../models/user');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/feedback')
});

router.get('/feedback', function(req, res, next) {
  res.render("./feedback")
});
//saving data to database and rendering it to submit page
router.post('/submit', (req, res) => {
   console.log(req.body);
  var myData = new userModel(req.body);
  myData.save()
    .then((item) => {
      res.render("./submit");
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });

});



module.exports = router;
