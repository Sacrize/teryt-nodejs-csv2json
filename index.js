var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('terc.csv')
});

var _ = require('lodash');
var fs = require('fs');

var db = {};

lineReader.on('line', function (line) {
  var tokens = line.split(';');
  var a = { };
  a[tokens[0]] = { };
  var lvl = a[tokens[0]];
  var step = 0;

  if (!_.isEmpty(tokens[1])) {
    lvl[tokens[1]] = { };
    lvl = lvl[tokens[1]];
    step = 1;
    if (!_.isEmpty(tokens[2])) {
      lvl[tokens[2]] = { };
      lvl = lvl[tokens[2]];
      step = 2;
    }
  }

  lvl.name = tokens[4];
  if (step == 2) {
    lvl.mie = [];
  }

  db = _.merge(db, a);
});

var lineReader2 = require('readline').createInterface({
  input: require('fs').createReadStream('simc.csv')
});

lineReader2.on('line', function (line) {
  var tokens = line.split(';');
  var lvl = db[tokens[0]];
  var step = 0;

  if (!_.isEmpty(lvl[tokens[1]])) {
    lvl = lvl[tokens[1]];
    step = 1;
    if (!_.isEmpty(lvl[tokens[2]])) {
      lvl = lvl[tokens[2]];
      step = 2;
    }
  }

  if (step == 2) {
    var b = {
      name: tokens[6],
    };
    lvl.mie.push(b);
  }
});

lineReader2.on('close', function () {
  fs.writeFile("pl.json", JSON.stringify(db, 0, 2), function (err) {
    if (err) {
      return console.log(err);
    }

    console.log("The file was saved!");
  });
})

