//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.

//(Focus on This Variable)
var url ='mongodb://heroku_nhvz97w1:a85dmnne2i516anqq867ir1b83@ds135552.mlab.com:35552/heroku_nhvz97w1'; 

//'mongodb://admin:123456@ds139959.mlab.com:39959/url-shortener';     
//(Focus on This Variable)

// Use connect method to connect to the Server
  MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    console.log('Connection established to', url);

    // do some work here with the database.

    //Close connection
    db.close();
  }
});

//Shell connection command
//mongo ds139959.mlab.com:39959/url-shortener -u admin -p 123456