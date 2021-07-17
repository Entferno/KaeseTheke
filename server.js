 // set up ======================== 
 var express  = require('express'); 
 var app      = express();              // create our app w/ express 
 var path     = require('path'); 
 var mysql    = require('mysql'); 
 var bodyParser = require('body-parser');

 // configuration =================
  app.use(express.static(path.join(__dirname, '/dist/my-new-angular-app')));  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));



// application

mySQLConnect = function(res, queue){

       var con = mysql.createConnection({
              database: "21_DB_Gruppe6",
              host: "195.37.176.178",
              port: "20133",
              user: "21_DB_Grp_6",
              password: "MpmQP?.EEQ*i=TOaHIytf2$d\\6ni#onG"
      
      });

      con.connect(function(err)
      {
             if(err) throw (err);
             console.log("Connected");

             con.query(queue,
                    function(error, results, fields){
                           if(error) throw(error);
                           console.log(results);
                       
                           res.send(results);                         
                           con.end(function(err)
                           {
                                  if(err) throw(err);
                                  console.log("Tschüss");

                           });
                    
                    }
             );
      });
}



 // listen (start app with node server.js) ======================================



//gibt alle produkte aus
 app.get('/produkt', function(req,res) 
{
       mySQLConnect(res, "SELECT * FROM 21_DB_Gruppe6.produkt")

});

//gibt alle user aus
app.get('/user', function(req,res) 
{
       mySQLConnect(res, "SELECT * FROM 21_DB_Gruppe6.user")

});

//Username vom userobject wird übergeben und anhand diesen wird überprüft ob der User in der Datenbank existiert, falls ja 
//wird dieser zurückgegeben

 app.get('/user/:username', function(req, res)
       {
       var con = mysql.createConnection({
              database: "21_DB_Gruppe6",
              host: "195.37.176.178",
              port: "20133",
              user: "21_DB_Grp_6",
              password: "MpmQP?.EEQ*i=TOaHIytf2$d\\6ni#onG"
      
      });

      con.connect(function(err)
           {
             var sql = 'SELECT * FROM 21_DB_Gruppe6.user WHERE user.username LIKE ?';
             if (err) throw err;
             console.log('leitung läuft');
             console.log(req.params.username);
             con.query(sql, [req.params.username], function (err, result)
             
             {
                    if(err) throw err;
                    res.send(result);
                    console.log(result);
                    con.end();
             });
       
             
           

       });
});
 

//aus den eingegebenen Daten in der  register Component wird ein ein User Object erstellt, übergeben und mit Hilfe von diesem kann auf
//die einzelnen  Values wie Passwort, Username etc. zugegriffen werden und mit der Datenbank abgeglichen werden werden
 
app.post('/newuser', function(req, res){
       var con = mysql.createConnection({
              database: "21_DB_Gruppe6",
              host: "195.37.176.178",
              port: "20133",
              user: "21_DB_Grp_6",
              password: "MpmQP?.EEQ*i=TOaHIytf2$d\\6ni#onG"
      
      });

      con.connect(function(err)
      
      {
             if(err) throw err;
             console.log("leitung läuft");
             console.log(req.body.username, req.body.passwort, req.body.adresse, req.body.email)
             var sql = 'INSERT INTO 21_DB_Gruppe6.user (user.username, user.passwort, user.adresse, user.email) VALUES ( ?, ?, ?, ?)';
             con.query(sql, [req.body.username, req.body.passwort, req.body.adresse, req.body.email], function(err,result)
             {
                    if(err) throw err;
                    res.send(result);
                    console.log(result);
                    con.end();
             })

             
      }); 

});

//nicht implemtierte Datenbankabfrag für das Updaten von Werten in der Datenbank

app.put('/user', function(req, res)
{
       var con = mysql.createConnection({
              database: "21_DB_Gruppe6",
              host: "195.37.176.178",
              port: "20133",
              user: "21_DB_Grp_6",
              password: "MpmQP?.EEQ*i=TOaHIytf2$d\\6ni#onG"

});


       con.connect(function(err)
       {
              if(err) throw err;
              console.log("leitung läuft");
              var sql = 'UPDATE 21_DB_Gruppe6.user SET username = ? , passwort = ?, email = ?, adresse = ? WHERE username like ?';
              con.query(sql, [req.body.username, req.body.passwort, req.body.passwort, req.body.adresse], function(err,result)
              {
                     if(err) throw err;
                     res.send(result);
                     con.end();
              });

       });

});


//der zu löschende User wird durch den Username gefunden und demenstprechend aus der Datenbank gelöscht

app.delete('/user/:username', function(req, res)
{
    var con = mysql.createConnection({
       database: "21_DB_Gruppe6",
       host: "195.37.176.178",
       port: "20133",
       user: "21_DB_Grp_6",
       password: "MpmQP?.EEQ*i=TOaHIytf2$d\\6ni#onG"
    });
          
    con.connect(function(err)
    {
        if(err) throw err;
        console.log("connected");
        var sql = 'DELETE FROM 21_DB_Gruppe6.user WHERE username LIKE ?';
        con.query(sql, [req.params.username], function(err,result)
        {
            console.log("nutzer wurde gelöscht");
            if(err) throw err;
            res.send(result);
        });
        con.end();
    })
});







  //start with node.js
 app.listen(8080, function(){   
        console.log("App listening on port 8080");
 });