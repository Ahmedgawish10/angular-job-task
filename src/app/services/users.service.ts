import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public behaviorSubject = new BehaviorSubject<number>(0);
  constructor(private httpApiLogin:HttpClient) { }

  baseApiLogin="https://reqres.in/api/users";
 
 
a:any;
  getUsers(userId?: number): Observable<any> {
    // if user search in input search and send id fire this show the selected user and hide the all users
    if (userId) {
      return this.httpApiLogin.get(`https://reqres.in/api/users/${userId}`);
    } else {
      
      return this.httpApiLogin.get('https://reqres.in/api/users');
    }
  }

  getBehaviorSubject() {
    return this.behaviorSubject;
  }

}
