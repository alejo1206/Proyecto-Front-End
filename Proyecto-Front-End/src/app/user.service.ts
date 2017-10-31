import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/of";
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {

  u = new BehaviorSubject<User>(null);
  user = this.u.asObservable();

  constructor() { }

  setUser(user: User){
    this.u.next(user);
  }

}
