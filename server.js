 // set up ======================== 
 var express  = require('express'); 
 var app      = express();              // create our app w/ express 
 var path     = require('path'); 
 var mysql    = require('mysql'); 
const { ConsoleReporter } = require('jasmine');
 
 // configuration =================
  app.use(express.static(path.join(__dirname, '/dist/my-new-angular-app')));  
 
 // application -------------------------------------------------------------
  app.get('/käse', function(req,res) 
 {   

       käse = [
              {title: "Erdbeerkäse", date: new Date(2021, 5, 25),
            }
            ]
            
            res.send(käse); 
                  
 });
 
 // listen (start app with node server.js) ======================================

 app.get('/lager', function(req,res) 
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
              if(err) throw (err);
              console.log("Connected");

              con.query("SELECT * FROM 21_DB_Gruppe6.produkt",
                     function(error, results, fields){
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



});




 app.listen(8080, function(){   
        console.log("App listening on port 8080");
 });