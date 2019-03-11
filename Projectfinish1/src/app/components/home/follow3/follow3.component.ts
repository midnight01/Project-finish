import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {ActivatedRoute} from "@angular/router";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-follow3',
  templateUrl: './follow3.component.html',
  styleUrls: ['./follow3.component.css']
})
export class Follow3Component implements OnInit {



  Courses: Observable<any[]>;
  CourseRef: AngularFireList<{}>;
  careers: Observable<any[]>;
  showFiller = false;
  item: Observable<any>;
  items: Observable<any[]>;

  statuss: Observable<any[]>;
  users:Observable<any[]>;
  constructor( private router: Router,public db: AngularFireDatabase,
    private afAuth: AngularFireAuth,private route: ActivatedRoute) { 

    // this.item = db.object('/users/users/'+this.afAuth.auth.currentUser.uid+'/profile/username').valueChanges();
   
    this.CourseRef = db.list('/users/users/'+this.afAuth.auth.currentUser.uid+'/measure/data2/');

    this.Courses = this.CourseRef.snapshotChanges().pipe(
      map(changes => 
      changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
                )
              );

  }

  ngOnInit() {
  }
  goRegister(): void{
    this.router.navigate(['/login']);
  }
  Follow2(id:any,id1:any){
    this.router.navigate(['/Follow2',id]);
  }

  goHome(){
    this.router.navigate(['/home']).then(() => {
      
    });
  }

}

