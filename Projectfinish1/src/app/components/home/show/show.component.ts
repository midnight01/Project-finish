import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  
  Courses: Observable<any[]>;
  CourseRef: AngularFireList<{}>;
  careers: Observable<any[]>;
  showFiller = false;
  item: Observable<any>;
  constructor( private router: Router,public db: AngularFireDatabase,
    private afAuth: AngularFireAuth,private route: ActivatedRoute) { 
    // this.careers = this.db.list("/users/"+this.afAuth.auth.currentUser.uid+'/measure/').valueChanges();
    this.item = db.object('/users/users/').valueChanges();

    this.CourseRef = db.list('/users/users/');
    // Use snapshotChanges().map() to store the key
    this.Courses = this.CourseRef.snapshotChanges().pipe(
      map(changes => 
      changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
                )
              );

  }

  ngOnInit() {
  }
  // goRegister(): void{
  //   this.router.navigate(['/login']);
  // }
  table(uid:string){
    // this.router.navigate(['/table']);
    this.router.navigate(['Table3', uid]);
  }
  goHome(){
    this.router.navigate(['/login']).then(() => {
      
    });
  }
}
