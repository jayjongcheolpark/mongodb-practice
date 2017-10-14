const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before(done => {
  // Set up default mongoose connection
  const uri = 'mongodb://localhost/users_test';
  var promise = mongoose.connect(uri, {
      userMongoClient: true
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