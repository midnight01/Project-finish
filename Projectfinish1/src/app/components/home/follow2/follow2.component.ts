import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {ActivatedRoute} from "@angular/router";
import { NgForm } from '@angular/forms';
import {formatDate } from '@angular/common';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-follow2',
  templateUrl: './follow2.component.html',
  styleUrls: ['./follow2.component.css']
})
export class Follow2Component implements OnInit {


  Courses: Observable<any[]>;
  CourseRef: AngularFireList<{}>;
  careers: Observable<any[]>;
  showFiller = false;
  item: Observable<any>;
  // items: Observable<any[]>;
  today= new Date();
  jstoday = '';
  measure1s: Observable<any[]>;
  measure2s: Observable<any[]>;
  measure3s: Observable<any[]>;
  measure4s: Observable<any[]>;
  measure5s: Observable<any[]>;
  measure6s: Observable<any[]>;
  id:any;
  id1:any;
  id3:any;
  statuss: Observable<any[]>;
  users:Observable<any[]>;
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  date11 = '';
  date22 = '';
  measure:any;

  constructor( private router: Router,public db: AngularFireDatabase,
    private afAuth: AngularFireAuth,private route: ActivatedRoute) { 
      this.measure1s = this.db.list('users/data/measure/1').valueChanges();
      this.measure2s = this.db.list('users/data/measure/2').valueChanges();
      this.measure3s = this.db.list('users/data/measure/3').valueChanges();
      this.measure4s = this.db.list('users/data/measure/4').valueChanges();
      this.measure5s = this.db.list('users/data/measure/5').valueChanges();
      this.measure6s = this.db.list('users/data/measure/6').valueChanges();
      
      this.route.params.subscribe( params =>{
        console.log(params)
        this.id = params['id'];
      }); 
        
      this.route.params.subscribe( params =>{
        console.log(params)
        this.id1 = params['id1'];
      }); 
   
      this.item = db.object('/users/users/'+this.afAuth.auth.currentUser.uid+'/profile/username').valueChanges();
      

      this.statuss = this.db.list('users/data/Status/').valueChanges();
   
   this.jstoday = formatDate(this.today, 'dd-MM-yyyy', 'en-US', '+0530');
    this.CourseRef = db.list('/users/users/'+this.afAuth.auth.currentUser.uid+'/profile');
    // Use snapshotChanges().map() to store the key
    this.Courses = this.CourseRef.snapshotChanges().pipe(
      map(changes => 
      changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
                )
              );

  
  }

  ngOnInit() {
  }

  esc(){
    this.router.navigate(['/input3']);
  }
  Follow(){
    this.router.navigate(['/Follow']);
  }
  Follow3(){
    this.router.navigate(['/Follow3']);
  }
  table(){
    this.router.navigate(['/Table2']);
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
  goRegister(): void{
    this.router.navigate(['/login']);
  }

  Follow333(){
    this.router.navigate(['/home']).then(() => {
      
    });
  }
  addWiki(data: NgForm){
    this.measure = data.value.measure1+data.value.measure2+data.value.measure3+data.value.measure4+data.value.measure5+data.value.measure6;
    
    this.date11 =   formatDate( this.date.value, 'dd-MM-yyyy', 'en-US', '+0530');
    this.date22 = formatDate( this.serializedDate.value, 'dd-MM-yyyy', 'en-US', '+0530');
console.log(this.date11);
console.log(this.date22);
console.log(this.measure);
console.log(data.value);
   
    this.db.list('/users/users/'+this.afAuth.auth.currentUser.uid+'/measure/data4/')
    .push({q:data.value,
      measure1:this.id,
      date: this.jstoday,
      time1:this.date11,
      measure:this.measure,
      time2:this.date22});
    this.router.navigate(['/Follow']);


}
}
