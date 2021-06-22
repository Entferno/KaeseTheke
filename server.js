 // set up ======================== 
 var express  = require('express'); 
 var app      = express();              // create our app w/ express 
 var path     = require('path'); 
 var mysql    = require('mysql'); 
const { ConsoleReporter } = require('jasmine');
 
 // configuration =================
  app.use(express.static(path.join(__dirname, '/dist/my-new-angular-app')));  
 
 // application -------------------------------------------------------------

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

 app.get('/produkt', function(req,res) 
{

       mySQLConnect(res, "SELECT * FROM 21_DB_Gruppe6.produkt")

});










 app.listen(8080, function(){   
        console.log("App listening on port 8080");
 });