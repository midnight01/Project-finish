import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-table3',
  templateUrl: './table3.component.html',
  styleUrls: ['./table3.component.css']
})
export class Table3Component implements OnInit {


  Courses: Observable<any[]>;
  CourseRef: AngularFireList<{}>;
  careers: Observable<any[]>;
  showFiller = false;
  item: Observable<any>;

  id2: any;


  constructor( private router: Router,public db: AngularFireDatabase,
    private afAuth: AngularFireAuth,private route: ActivatedRoute) { 

      this.route.params.subscribe( params =>{
        console.log(params)
        this.id2 = params['uid'];
      }); 
        
    // this.careers = this.db.list("/users/"+this.afAuth.auth.currentUser.uid+'/measure/').valueChanges();
    this.item = db.object('/users/users/'+this.id2+'/measure/date1').valueChanges();

    this.CourseRef = db.list('/users/users/'+this.id2+'/measure/data3');
    // Use snapshotChanges().map() to store the key
    this.Courses = this.CourseRef.snapshotChanges().pipe(
      map(changes => 
      changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
                )
              );
 console.log(this.id2);
 }

  ngOnInit() {
  }
  goRegister(): void{
    this.router.navigate(['/login']);
  }
  table(date:string,id2:string){
    // this.router.navigate(['/table']);
    this.router.navigate(['Table4', date,id2]);
  }
  goHome(){
    this.router.navigate(['/login']).then(() => {
      
    });
  }
}
