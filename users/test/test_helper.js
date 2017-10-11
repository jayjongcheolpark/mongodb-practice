const mongoose = require('mongoose');
const uri = 'mongodb://localhost/users_test';
mongoose.connect(uri, {
    userMongoClient: true,
});

mongoose.connection
  .once('open', () => console.log('Good to go!'))
  .on('error', (error) => {
    console.warn('Warning', error);
  });