var mysql = require('mysql');

var con = mysql.createConnection({
  host: "coms-319-022.cs.iastate.edu",
  user: "team32",
  password: "team32passwordVM@319",
  database: "UserInfo"
});


con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM Login", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    con.end(function(err) {
     if (err) {
       return console.log(err.message);
     } else{
       console.log("Close connection!");
     }
    });
  });
});
