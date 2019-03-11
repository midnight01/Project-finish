import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import {ActivatedRoute} from "@angular/router";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  sym: string;
  sy: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' , sym: 'ss', sy:'s'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', sym: 'ss', sy:'s'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', sym: 'ss', sy:'s'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', sym: 'ss', sy:'s'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', sym: 'ss', sy:'s'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', sym: 'ss', sy:'s'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', sym: 'ss', sy:'s'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', sym: 'ss', sy:'s'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', sym: 'ss', sy:'s'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', sym: 'ss', sy:'s'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na', sym: 'ss', sy:'s'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg', sym: 'ss', sy:'s'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al', sym: 'ss', sy:'s'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si', sym: 'ss', sy:'s'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P', sym: 'ss', sy:'s'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S', sym: 'ss', sy:'s'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl', sym: 'ss', sy:'s'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar', sym: 'ss', sy:'s'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K', sym: 'ss', sy:'s'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca', sym: 'ss', sy:'s'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  displayedColumns: string[] = [ 'name', 'weight', 'symbol','sym','sy','s','so','sos','sso','soo','sss'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
// ,'oo','o'
  Courses: Observable<any[]>;
  CourseRef: AngularFireList<{}>;
  users: Observable<any[]>;
  user1s: AngularFireList<{}>;

  id2: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private router: Router,public db: AngularFireDatabase,
    private afAuth: AngularFireAuth,private route: ActivatedRoute) {

      this.route.params.subscribe( params =>{
        console.log(params)
        this.id2 = params['date'];
      }); 
        
      
    this.CourseRef = db.list("/users/users/"+this.afAuth.auth.currentUser.uid+'/measure/data1/'+this.id2+'/measure');
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

      this.route.params.subscribe( params =>{
        console.log(params)
        this.id2 = params['date'];
      }); 
        

      console.log(this.id2);
   }

  ngOnInit() {
    // this.route.params.subscribe(param => {
    //   console.log(param)
    //   this.id2 = param['id'];
    // });
  }
  input(){
    this.router.navigate(['/home']);
  }
  goRegister(): void{
    this.router.navigate(['/login']);
  }

}
