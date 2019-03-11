import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor( private router: Router) { }

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
  input(){
    this.router.navigate(['/home']);
  }

}
