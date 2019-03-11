import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Career } from '../models';


@Injectable({
  providedIn: 'root'
})
export class CareerService {
  constructor(
    private db: AngularFireDatabase,
    private fireAuth: AngularFireAuth
  ) { }

  newUser(career: Career){
 
  }
}
