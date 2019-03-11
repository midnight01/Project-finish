import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import {ActivatedRoute} from "@angular/router";
import { NgForm } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Component({
  selector: 'app-input3',
  templateUrl: './input3.component.html',
  styleUrls: ['./input3.component.css']
})
export class Input3Component implements OnInit {

  today= new Date();
  jstoday = '';



  constructor( private router: Router,public snackBar: MatSnackBar,public db: AngularFireDatabase,
    private afAuth: AngularFireAuth,private route: ActivatedRoute) { 
  }

  config: MatSnackBarConfig = {
    duration: 1000,
    horizontalPosition: 'right',
    verticalPosition: 'top'
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
  
  addWiki1(data: NgForm){
    this.db.list('/users/users/'+this.afAuth.auth.currentUser.uid+'/measure/data/career/career').push(data.value);
    // this.router.navigate(['/input']);
     this.config['panelClass'] = ['notification','error'];
    this.snackBar.open('บันทึกข้อมูลเสร็จแล้ว','', this.config);
  }
  addWiki2(data: NgForm){
    this.db.list('/users/users/'+this.afAuth.auth.currentUser.uid+'/measure/data/career/work').push(data.value);
    // this.router.navigate(['/input2']);
    this.config['panelClass'] = ['notification','error'];
    this.snackBar.open('บันทึกข้อมูลเสร็จแล้ว','', this.config);
  }
  addWiki3(data: NgForm){
    this.db.list('/users/users/'+this.afAuth.auth.currentUser.uid+'/measure/data/career/danger').push(data.value);
    // this.router.navigate(['/input2']);
    this.config['panelClass'] = ['notification','error'];
    this.snackBar.open('บันทึกข้อมูลเสร็จแล้ว','', this.config);
  }
  addWiki4(data: NgForm){
    this.db.list('/users/users/'+this.afAuth.auth.currentUser.uid+'/measure/data/career/gets').push(data.value);
    // this.router.navigate(['/input2']);
    this.config['panelClass'] = ['notification','error'];
    this.snackBar.open('บันทึกข้อมูลเสร็จแล้ว','', this.config);
  }
  addWiki5(data: NgForm){
    this.db.list('/users/users/'+this.afAuth.auth.currentUser.uid+'/measure/data/career/nature').push(data.value);
    // this.router.navigate(['/input2']);
    this.config['panelClass'] = ['notification','error'];
    this.snackBar.open('บันทึกข้อมูลเสร็จแล้ว','', this.config);
  }
  addWiki6(data: NgForm){
    this.db.list('/users/users/'+this.afAuth.auth.currentUser.uid+'/measure/data/area/area').push(data.value);
    // this.router.navigate(['/input2']);
    this.config['panelClass'] = ['notification','error'];
    this.snackBar.open('บันทึกข้อมูลเสร็จแล้ว','', this.config);
  }
}
