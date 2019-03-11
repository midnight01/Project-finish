import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-table4',
  templateUrl: './table4.component.html',
  styleUrls: ['./table4.component.css']
})
export class Table4Component implements OnInit {

// ,'oo','o'
Courses: Observable<any[]>;
CourseRef: AngularFireList<{}>;
users: Observable<any[]>;
user1s: AngularFireList<{}>;
id: any;
id2: any;
@ViewChild(MatPaginator) paginator: MatPaginator;

constructor(private router: Router,public db: AngularFireDatabase,
  private afAuth: AngularFireAuth,private route: ActivatedRoute) {

    this.route.params.subscribe( params =>{
      console.log(params)
      this.id2 = params['id2'];
    }); 
      
    
    this.route.params.subscribe( params =>{
      console.log(params)
      this.id = params['date'];
    }); 
      
    console.log("da55te",this.id2);
    console.log("uid",this.id);
    
  this.CourseRef = db.list("/users/users/"+this.id+'/measure/data1/'+this.id2+'/measure');
  // Use snapshotChanges().map() to store the key
  this.Courses = this.CourseRef.snapshotChanges().pipe(
    map(changes => 
    changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
              )
            );
//  console.log(this.Courses);
//     this.user1s = db.list("/users/"+this.afAuth.auth.currentUser.uid+'/measure');
//       // Use snapshotChanges().map() to store the key
//      this.users = this.user1s.snapshotChanges().pipe(
//       map(changes => 
//       changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
//         )
//       );

    
 }

ngOnInit() {
  // this.route.params.subscribe(param => {
  //   console.log(param)
  //   this.id2 = param['id'];
  // });
}
input(){
  this.router.navigate(['/login']);
}
goRegister(): void{
  this.router.navigate(['/login']);
}

}
