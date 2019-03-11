
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../shared/models';
import { SignupService } from 'src/app/shared/signup/signup.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User = new User();
  registerForm: FormGroup;
  constructor(private router: Router,
    private sig: SignupService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.registerForm = this.fb.group({
      username: ['' , Validators.compose([
        Validators.required
      ])],
      fullname: ['' , Validators.compose([
        Validators.required
      ])],
      email: ['' , Validators.compose([
        Validators.required,
        Validators.email
      ])],
      password: ['' , Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(26)
      ])]
    });
  }

  onSubmit(form: FormGroup){
    this.user = Object.assign({}, form.value);
    console.log(this.user);
    this.sig.newUser(this.user)
    .then(() => {
      this.registerForm.reset();
      this.registerForm.pending;
    })
    .catch((err) => {
      console.log(err);
    });
    this.router.navigate(['/login']);
  }

}