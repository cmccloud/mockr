var User = require('../api/user/userModel');

var createUserIfNotExistant = function(user, cb) {
  User.findOne({'username': user.username}, function(err, user) {
    if(!user) {
      var newUser = new User({ 'username': user.username, 'userID': user.id });
      newUser.save(function (err, user) {
        if (err){
          console.log('Error: ', err);
          return cb(err, null);
        } 
        console.log('User created');
        return cb(null, user);
      });
    } else {
      return cb(null, user);
    }
  });
};

module.exports = {
  createUserIfNotExistant: createUserIfNotExistant
};