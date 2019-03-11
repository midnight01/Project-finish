import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.css']
})
export class FollowComponent implements OnInit {


  Courses: Observable<any[]>;
  CourseRef: AngularFireList<{}>;
  careers: Observable<any[]>;
  showFiller = false;
  item: Observable<any>;
  constructor( private router: Router,public db: AngularFireDatabase,
    private afAuth: AngularFireAuth,private route: ActivatedRoute) { 
    
     this.item = db.object('/users/users/'+this.afAuth.auth.currentUser.uid+'/profile/username').valueChanges();

    this.CourseRef = db.list('/users/users/'+this.afAuth.auth.currentUser.uid+'/measure/data4');
    this.Courses = this.CourseRef.snapshotChanges().pipe(
      map(changes => 
      changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
                )
              );
 console.log(this.Courses);
 this.route.params.subscribe( params => console.log(params) );
  }

  ngOnInit() {
  }
  goRegister(): void{
    this.router.navigate(['/login']);
  }
  table(date:string){
    // this.router.navigate(['/table']);
    this.router.navigate(['table', date]);
  }

  goHome(){
    this.router.navigate(['/home']).then(() => {
      
    });
  }
}