import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userService/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup;
  constructor(private router: Router,private _snackBar: MatSnackBar,private fb:FormBuilder,private user:UserService) { }

  ngOnInit(): void
  {
      this.loginForm=this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        Password:['',Validators.required]
      })
  }
  onSubmit()
  {
    if(this.loginForm.valid)
    {
      console.log("valid data",this.loginForm.value);
      console.log("do api call");
      let data=
      {
        email: this.loginForm.value.email,
        password: this.loginForm.value.Password
      }
      this.user.login(data).subscribe((result:any)=>
      {
          console.log(result.token)
          localStorage.setItem('token' , result.token)
      })
      this.router.navigate(['/dashboard']);
    }
    
    else
    {
      console.log("invalid data",this.loginForm.value);
      console.log("no api call");
    }
  }
  snackBar(msg:any,action:string)
  {
     this._snackBar.open(msg, action);
  }
}