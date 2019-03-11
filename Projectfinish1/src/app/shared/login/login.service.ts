import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(
    private fireAuth: AngularFireAuth
  ) { }

  userLogin(user: User){
    return this.fireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }
  userLogout(){
    return this.fireAuth.auth.signOut();
  }
}
