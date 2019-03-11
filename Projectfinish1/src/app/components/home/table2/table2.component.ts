import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css']
})
export class Table2Component implements OnInit {


  Courses: Observable<any[]>;
  CourseRef: AngularFireList<{}>;
  careers: Observable<any[]>;
  showFiller = false;
  item: Observable<any>;
  constructor( private router: Router,public db: AngularFireDatabase,
    private afAuth: AngularFireAuth,private route: ActivatedRoute) { 
    // this.careers = this.db.list("/users/"+this.afAuth.auth.currentUser.uid+'/measure/').valueChanges();
    this.item = db.object('/users/users/'+this.afAuth.auth.currentUser.uid+'/measure/data3').valueChanges();

    this.CourseRef = db.list('/users/users/'+this.afAuth.auth.currentUser.uid+'/measure/data3');
    // Use snapshotChanges().map() to store the key
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
  esac(){
    this.router.navigate(['/input3']);
  }
  Follow(){
    this.router.navigate(['/Follow']);
  }
  Follow3(){
    this.router.navigate(['/Follow3']);
  }

  Contact(){
    this.router.navigate(['/Contact']);
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
