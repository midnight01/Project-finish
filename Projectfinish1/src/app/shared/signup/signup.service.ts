import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../shared/models';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  constructor(
    private db: AngularFireDatabase,
    private fireAuth: AngularFireAuth
  ) { }

  newUser(user: User){
    return this.fireAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
          .then((res) => {
            this.db.object(`users/users/${res.user.uid}/profile`).set({
              username: user.username,
              Position: user.fullname,
              email: user.email,
              uid: res.user.uid
            })
            .then(() => {
              console.log('register success');
            })
            .catch((err) => {
              console.log(err);
            })
          });
  }
}
