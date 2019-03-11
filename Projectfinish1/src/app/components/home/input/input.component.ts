import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  careers: Observable<any[]>;
  works: Observable<any[]>;
  dangers: Observable<any[]>;
  getss: Observable<any[]>;
  natures: Observable<any[]>;

  number1s: Observable<any[]>;
  number2s: Observable<any[]>;
  number3s: Observable<any[]>;
  number4s: Observable<any[]>;
  number5s: Observable<any[]>;
  number6s: Observable<any[]>;
  number7s: Observable<any[]>;
  number8s: Observable<any[]>;
  number9s: Observable<any[]>;
  number10s: Observable<any[]>;

  measure1s: Observable<any[]>;
  measure2s: Observable<any[]>;
  measure3s: Observable<any[]>;
  measure4s: Observable<any[]>;
  measure5s: Observable<any[]>;
  measure6s: Observable<any[]>;
  violences: Observable<any[]>;

  date =  new Date();
  n1: any;
  n2: any;
  n3: any;
  n4: any;
  n5: any;
  n6: any;
  n7: any;
  n8: any;
  n9: any;
  n10: any;
  nn: any;
  sum: any;
  sum1: any;
  sum2: any;
  esc:any;
  number:any;
  vio:any;
  measure:any;

  today= new Date();
  jstoday = '';

  constructor(private router: Router,private afAuth: AngularFireAuth,public  db: AngularFireDatabase) { 
    this.careers = this.db.list('users/users/'+this.afAuth.auth.currentUser.uid+'/measure/data/career/career').valueChanges();
    this.works = this.db.list('users/users/'+this.afAuth.auth.currentUser.uid+'/measure/data/career/work').valueChanges();
    this.dangers = this.db.list('users/users/'+this.afAuth.auth.currentUser.uid+'/measure/data/career/danger').valueChanges();
    this.getss = this.db.list('users/users/'+this.afAuth.auth.currentUser.uid+'/measure/data/career/gets').valueChanges();
    this.natures = this.db.list('users/users/'+this.afAuth.auth.currentUser.uid+'/measure/data/career/nature').valueChanges();
    this.number1s = this.db.list('users/data/number/1').valueChanges();
    this.number2s = this.db.list('users/data/number/2').valueChanges();
    this.number3s = this.db.list('users/data/number/3').valueChanges();
    this.number4s = this.db.list('users/data/number/4').valueChanges();
    this.number5s = this.db.list('users/data/number/5').valueChanges();
    this.number6s = this.db.list('users/data/number/6').valueChanges();
    this.number7s = this.db.list('users/data/number/7').valueChanges();
    this.number8s = this.db.list('users/data/number/8').valueChanges();
    this.number9s = this.db.list('users/data/number/9').valueChanges();
    this.number10s = this.db.list('users/data/number/10').valueChanges();
    this.measure1s = this.db.list('users/data/measure/1').valueChanges();
    this.measure2s = this.db.list('users/data/measure/2').valueChanges();
    this.measure3s = this.db.list('users/data/measure/3').valueChanges();
    this.measure4s = this.db.list('users/data/measure/4').valueChanges();
    this.measure5s = this.db.list('users/data/measure/5').valueChanges();
    this.measure6s = this.db.list('users/data/measure/6').valueChanges();
    this.violences = this.db.list('users/data/violence/1').valueChanges();
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy', 'en-US', '+0530');

    // console.log(this.jstoday);
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
  
  input(){
    this.router.navigate(['/home']);
  }
  // ,sum2:number,sum1:number,sum:number,n1:number,n2:number,n3:number,n4:number,n5:number
  // ,n6:number,n7:number,n8:number,n9:number,n10:number,nn:number,esc:string,measure:number,vio:string
  addWiki12(data: NgForm){
    if(data.value.number1 == 0){
      this.n1 = 0;
    } else{
      this.n1 = 3*3;
    }
     if(data.value.number2 == 0){
      this.n2 = 0;
    } else {
      this.n2 = 3*3;
    }
    if(data.value.number3 == 0){
      this.n3 = 0;
    } else {
      this.n3 = 3*3;
    }
    if(data.value.number4 == 0){
      this.n4 = 0;
    } else{
      this.n4 = 3*3;
    }
     if(data.value.number5 == 0){
      this.n5 = 0;
    } else{
      this.n5 = 3*3;
    }
     if(data.value.number6 == 0){
      this.n6 = 0;
    } else{
      this.n6 = 2*3;
    }
     if(data.value.number7 == 0){
      this.n7 = 0;
    } else{
      this.n7 = 2*3;
    }if(data.value.number8 == 0){
      this.n8 = 0;
    } else{
      this.n8 = 3*3;
    }
     if(data.value.number9 == 0){
      this.n9 = 0;
    } else {
      this.n9 = 3*3;
    }
    if(data.value.number10 == 0){
      this.n10 = 0;
    } else{
      this.n10 = 2*3;
    }
    this.sum = (((3*data.value.number1)+(3*data.value.number2)+(3*data.value.number3)+(3*data.value.number4)+(3*data.value.number5)+(2*data.value.number6)+
    (2*data.value.number7)+(3*data.value.number8)+(3*data.value.number9)+(2*data.value.number10)));
    this.nn = this.n1+this.n2+this.n3+this.n4+this.n5+this.n6+this.n7+this.n8+this.n9+this.n10;
    this.sum1 = ((this.sum/this.nn)*100);

    // this.measure = data.value.measure1+data.value.measure2+data.value.measure3+data.value.measure4+data.value.measure5+data.value.measure6;
    
    if(this.sum1 < 55){
      this.esc = "น้อย"
    } else if(this.sum1 > 55 && this.sum1 < 77) {
      this.esc = "ปานกลาง"
    } else if(this.sum1 > 77) {
      this.esc = "มาก"
    }


    if(this.esc == "มาก"){

      if(data.value.violence ==  "มาก"){
        this.vio = "ความเสี่ยงยอมรับไม่ได้"
  
      } else if(data.value.violence ==  "ปานกลาง"){
        this.vio = "ความเสี่ยงสูง"
  
      } else if(data.value.violence ==  "น้อย"){
        this.vio = "ความเสี่ยงปานกลาง"
  
      }

    } else if(this.esc == "ปานกลาง"){
      if(data.value.violence ==  "มาก"){
        this.vio = "ความเสี่ยงสูง"
  
      } else if(data.value.violence ==  "ปานกลาง"){
        this.vio = "ความเสี่ยงปานกลาง"
  
      }else if(data.value.violence ==  "น้อย"){
        this.vio = "ความเสี่ยงยอมรับได้"
  
      }
    } else if(this.esc == "น้อย"){

      if( data.value.violence ==  "มาก"){
        this.vio = "ความเสี่ยงปานกลาง"
  
      }else if(data.value.violence ==  "ปานกลาง"){
        this.vio = "ความเสี่ยงยอมรับได้"
  
      } else if(data.value.violence ==  "น้อย"){
        this.vio = "ความเสี่ยงเล็กน้อย"
  
      }
    }
// console.log("รวมตัวหาร", sum);
// console.log("รวมฐาน",nn,sum1);
// console.log("รวม", sum1);
// console.log("measure", measure);
// +'/date/'+this.jstoday+'/measure'
    const user = this.db.list("/users/users/"+this.afAuth.auth.currentUser.uid +'/measure'+'/data1/'+this.jstoday+'/measure')
    const user3 = this.db.list("/users/users/"+this.afAuth.auth.currentUser.uid +'/measure/data2/')
    const user2 = this.db.object("/users/users/"+this.afAuth.auth.currentUser.uid +'/measure'+'/data3/'+this.jstoday )
   
    user2.set({ date: this.jstoday
    });
    user.push({ g:data.value ,
      sum: this.sum/this.nn,
      sum2: this.nn,
      sum3: this.sum1,
      esc: this.esc,
      // measure: this.measure,
      vio:this.vio,
      date: this.jstoday
    });
    
    user3.push({ g:data.value.measure ,danger:data.value.danger ,nature:data.value.nature, 
      sum: this.sum/this.nn,
      sum2: this.nn,
      sum3: this.sum1,
      esc: this.esc,
      // measure: this.measure,
      vio:this.vio,
      date: this.jstoday
    });
    this.router.navigate(['/Table2']);
    // console.log(data.value);
}
 }
