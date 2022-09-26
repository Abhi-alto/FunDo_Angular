import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void
  {
      this.loginForm=this.fb.group(
      {
        email:['',Validators.required,Validators.email],
        Password:['',Validators.required]
      })
  }
  onSubmit()
  {
    if(this.loginForm.valid)
    {
      console.log("valid data",this.loginForm.value);
      console.log("do api call");
    }
    else
    {
      console.log("invalid data",this.loginForm.value);
      console.log("no api call");
    }
  }
}
