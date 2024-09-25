import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
loginForm:any;
registerForm:any;

// to store the status of the form initially it is set to login
activeForm: 'login'| 'register'='login';

constructor(private fb:FormBuilder,
private router:Router,
private snackBar: MatSnackBar){}

//snackbar is an error msg pop up

  ngOnInit(){
    this.loginForm=this.fb.group({
      email :['',[Validators.required,Validators.email]],
      password: ['',Validators.required]
    });

    this.registerForm=this.fb.group({
      username :['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      password: ['', Validators.required]
    });
  }

  toggleForm(form: 'login'|'register'){
    this.activeForm= form;
  }

  login(){
    if(this.loginForm.valid){
      console.log("Login info==>",this.loginForm.value);
      this.router.navigate(['/budget-planner/dashboard']);
    }else{
      this.snackBar.open('Invalid email or password!', 'Close', {duration:3000});
    }
  }


register(){
    if(this.registerForm.valid){
      console.log("Register info==>",this.registerForm.value);
      //once we save this form, reload the page
      setTimeout(() =>{
        window.location.reload();
      },2000);
      this.router.navigate(['/budget-planner/login']);
    }else{
      this.snackBar.open('Please Fill in all the fields correctly!', 'Close', {duration:3000});
    }
  }

}
