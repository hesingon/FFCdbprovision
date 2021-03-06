//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.

//(Focus on This Variable)
var url = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/data';
//'mongodb://user1:123456@ds139959.mlab.com:39959/url-shortener';     
//(Focus on This Variable)

// Use connect method to connect to the Server
  MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    console.log('Connection established to', url);
    console.log(process.env.MONGOLAB_URI);


    // do some work here with the database.

    //Close connection
    db.close();
  }
});

//Shell connection command
//mongo ds139959.mlab.com:39959/url-shortener -u user1 -p 123456