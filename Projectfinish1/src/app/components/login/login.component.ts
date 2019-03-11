import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../shared/login/login.service';
import { Router } from '@angular/router';
import { User } from '../../shared/models';
import { AuthService } from '../../shared/auth/auth.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  loginForm: FormGroup;

  constructor( private loginService: LoginService,
               private fb: FormBuilder,
               private router: Router,
               private authService: AuthService,public snackBar: MatSnackBar) { }
               config: MatSnackBarConfig = {
                duration: 1000,
                horizontalPosition: 'right',
                verticalPosition: 'top'
              }

  ngOnInit() {
    this.createLoginForm();
  }
  createLoginForm(){
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.email
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(26)
      ])]
    });
  }
  loginSubmit(form: FormGroup){
    this.user = Object.assign({}, form.value);
    this.loginService.userLogin(this.user)
    .then(() => {
      this.router.navigate(['/home']);
    })
    .catch((err) => {
      console.log(err);
      this.config['panelClass'] = ['notification','er'];
      this.snackBar.open('มีบางอย่างผิดพลาด, ลองใหม่อีกครั้ง !!!','', this.config);
  
    });
  }
  goRegister(): void{
    this.router.navigate(['/signup']);
  }

  Show(){
    this.router.navigate(['/Show']);
  }
}
