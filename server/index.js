var express = require('express');
var app = express();

var fs = require('fs');

var formidable = require('express-formidable');
app.use(formidable({
  uploadDir: './public',
}));

app.listen(3000, () => console.log('server-started11'));

/*
app.post('/', (req, res) => {
  //console.log(req.fields); // contains non-file fields
  console.log(req.files.avatar); // contains files

  fs.rename(req.files.avatar.path, req.files.avatar.path + '.jpg', err => {
    res.send('xinchao');
  });
  res.send('xinchao');
});
*/

app.post('/', (req,res) => {
  console.log(req.fields);
  console.log(req.files.avatar);
  fs.rename(req.files.avatar.path, req.files.avatar.path + '.jpg', err => {
    res.send('xinchao');
  });
});

//  app.get('/', (req, res) => res.send('xinchao'))
