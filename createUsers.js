var mysql = require('mysql');

var con = mysql.createConnection({
  host: "coms-319-022.cs.iastate.edu",
  user: "team32",
  password: "team32passwordVM@319",
  database: "UserInfo"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to server!");
  var sqlCreate = "CREATE TABLE if not exists Login(username VARCHAR(255), password VARCHAR(255), PRIMARY KEY (username))";

  con.query(sqlCreate, function (err, result) 
  {
    if (err) 
    {
      console.log(err);
      throw err;
    } 
    else
    {
        console.log("Prepare to insert to table Login: ");
        var value=[
          ["user1@gmail.com", "password1"]
        ];
        var sqlInsert = "INSERT INTO Login (username, password) VALUES ?";

        con.query(sqlInsert,[value], function (err, result) 
        {
          if (err) 
          {
            //console.log(err);
            console.log("record exists!");
          } 
          else
          {
              console.log("record inserted");
          }
        });

        con.end(function(err) 
        {
         if (err) 
         {
           return console.log(err.message);
         } 
         else
         {
           console.log("Close connection!");
         }
       });
    }
  });
});
