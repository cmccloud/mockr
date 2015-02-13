var User = require('./userModel');

var createUser = function (req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var newUser = new User({ username: username, password: password });
  newUser.save(function (err) {
    if (err) console.log('Error: ', err);
    console.log('User created');
  });
};

//TODO: return user, specify user
var getUser = function (req, res) {
  var username = req.params.username;
  User.find({'username': username}, function (err, user) {
    //specify user!!!
    if (err) return console.log('Error: ', err);
    //return user
    console.log(user);
  });
};


var getUsers = function (req, res) {
  User.find(function (err, users) {
    if (err) return console.log('Error: ', err);
    //return users
    console.log(users);
  });
};

//NOT COMPLETE
//TODO: specify user, lookup format for findAndModify
var editUser = function (req, res) {
  var username = req.params.username;
  User.findAndModify(User, {'username': username}, function (err, users) {
    //specify user!!!
    if (err) return console.log('Error: ', err);
    //return users
    console.log(users);
  });
};
