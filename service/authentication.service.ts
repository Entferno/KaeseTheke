import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private localhost = 'http://localhost:8080/';
  private isLoggedIn: boolean;
  private user: User;

  constructor(private http: HttpClient) { }

  public getUsers():Observable<User[]> {
    return this.http.get<User[]>(this.localhost + 'user');
  } 

   public getUserByName(username: string): Observable<User[]>  {
    return this.http.get<User[]>(this.localhost + 'user/' + username)
  }

   public doLogIn(isLoggedIn: boolean){
    this.isLoggedIn = isLoggedIn;
  }
   public setActiveUser(user: User){
     this.user = user;
   }

   public getActiveUser(){
     return this.user
   }




}