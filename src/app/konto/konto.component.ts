import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'service/authentication.service';
import { User } from '../model/user';


@Component({
  selector: 'app-konto',
  templateUrl: './konto.component.html',
  styleUrls: ['./konto.component.css']
})
export class KontoComponent implements OnInit {

  public username = "";
  public passwort = "";

  user: User[];
  public message = "";
  testUser: any;
  
  
  constructor(private http:HttpClient, private authenticationService: AuthenticationService ) { }

  private url = 'user';


  ngOnInit(): void { 

    

  }


  


   einloggen(){
     if(this.username == ""){
       this.message = "Du musst schon einen Nutzername eingeben";
     }else {
       this.authenticationService.getUserByName(this.username).subscribe((result) => {
        this.user = result;

        if(this.user[0] == null){
          this.message = "Kein User gefunden";
        }
        else if (this.user[0].passwort == this.passwort){
        this.authenticationService.doLogIn(true);
        this.message="erfolgreich eingeloggt";
        this.authenticationService.setActiveUser(this.user[0])

        } else if(this.passwort == ''){
          this.message = "Bidde Passwort eingeben"
        } else {
          this.message = "Passwort falsch"
        }
      }) 

    }

  }
}
    
     

   



   




   

  


 


