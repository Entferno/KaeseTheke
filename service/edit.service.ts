import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root'
})
export class EditService {
  public localhost = 'http://localhost:8080/';

  constructor(private http:HttpClient) { }

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

  


  public addUser(user: User): Observable<any>{
    return this.http.post(this.localhost + 'newuser' , + user);
  }

  public getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.localhost + 'user')
  }

  public deleteUser(username: string): Observable<any>{
    return (this.http.delete('http://localhost:8080/user/' + username, this.httpOptions))
  }


}
