var express = require('express');
var router = express.Router();
const spawn = require('child_process').spawn;
const ls = spawn('python', ['./public/javascripts/test.py']);



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  var code = req.body.code;
  var arr = code.split(',');
  var py = JSON.stringify(arr)
  ls.stdin.write(JSON.stringify(arr));
  py.stdout.on('end', function(){
  console.log('Sum of numbers = ', dataString);
});
  for(var i = 0; i < arr.length; i++){

}
  res.redirect('/');
})

module.exports = router;
