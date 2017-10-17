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

  // model(name, schema, collectionName)
  // if you didn't define collectionName,
  // mongoose automatically adds 's' to model's name for collectionName
  // collectionName should be lowercase
  const { users, comments, blogposts } = mongoose.connection.collections;
  users.drop(() => {
    comments.drop(() => {
      blogposts.drop(() => {
        done();
      });
    });
  });
});
