import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { EditService } from 'service/edit.service';
import { RegisterData } from '../model/RegisterData';
import { User } from '../model/user';
import { HttpClient, HttpHeaders, JsonpClientBackend } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private editService: EditService, private http: HttpClient) { }
  public username: string;
  public passwort: string;
  public email   : string;
  public adress  : string;

  json: any;

  ngOnInit(): void {
  }

  url = 'newuser';

  registrieren(){


    var body = {    
       u1: this.username,
       p1: this.passwort,
       e1: this.email,
       a1: this.adress
    }

    var neuerUser = new User(body.u1, body.p1, body.a1 ,body.e1);

    console.log(neuerUser)
    return this.http.post(this.url, neuerUser).subscribe((result) =>{
      console.log(result)
      /* this.json = (result.json) */
    });



    

  }


}
