const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before(done => {
  const uri = 'mongodb://localhost/users_test';
  mongoose.connect(uri, {
      userMongoClient: true,
  });

  mongoose.connection
    .once('open', () => done())
    .on('error', (error) => {
      console.warn('Warning', error);
    });
});



beforeEach(done => {
  mongoose.connection.collections.users.drop(() => {
    // Ready to run the next test
    done();
  });
});