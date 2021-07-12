import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'service/authentication.service';
import { EditService } from 'service/edit.service';
import { User } from '../model/user';

@Component({
  selector: 'app-loggedin',
  templateUrl: './loggedin.component.html',
  styleUrls: ['./loggedin.component.css']
})
export class LoggedinComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private editService: EditService) { }

  users: User[];

  

  ngOnInit(): void {
    this.getUserdaten();
    

  }

  public getUserdaten(){
    this.editService.getUsers().subscribe((result) => {
      this.users = result;
    })
  }


  public deleteUser(username: string){
    this.editService.deleteUser(username).subscribe((result) => {
      console.log(result)
    });
    this.getUserdaten()

  }





  





}
