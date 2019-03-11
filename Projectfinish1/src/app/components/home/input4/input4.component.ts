import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-input4',
  templateUrl: './input4.component.html',
  styleUrls: ['./input4.component.css']
})
export class Input4Component implements OnInit {

  Courses: Observable<any[]>;
  CourseRef: AngularFireList<{}>;
  careers: Observable<any[]>;
  showFiller = false;
  item: Observable<any>;
  constructor( private router: Router,public db: AngularFireDatabase,
    private afAuth: AngularFireAuth,private route: ActivatedRoute) { 
    
     this.item = db.object('/users/users/'+this.afAuth.auth.currentUser.uid+'/profile/username').valueChanges();

    this.CourseRef = db.list('/users/users/'+this.afAuth.auth.currentUser.uid+'/measure/data2');
    this.Courses = this.CourseRef.snapshotChanges().pipe(
      map(changes => 
      changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
                )
              );
//  console.log(this.Courses);
 this.route.params.subscribe( params => console.log(params) );
  }

  ngOnInit() {
  }
  goRegister(): void{
    this.router.navigate(['/login']);
  }
  esac(){
    this.router.navigate(['/input3']);
  }
  Follow(){
    this.router.navigate(['/Follow']);
  }
  Follow3(){
    this.router.navigate(['/Follow3']);
  }
  table(date:string){
    // this.router.navigate(['/table']);
    this.router.navigate(['table', date]);
  }
  Contact(){
    this.router.navigate(['/Contact']);
  }
  goHome(){
    this.router.navigate(['/home']).then(() => {
    });
  }
  input3(){
    this.router.navigate(['/input']);
  }
  input4(){
    this.router.navigate(['/input2']);
  }
  Fol(){
    this.router.navigate(['/input4']);
  }
  input(){
    this.router.navigate(['/home']);
  }
  table1(){
    this.router.navigate(['/Table2']);
  }
}
