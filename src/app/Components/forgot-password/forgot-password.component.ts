import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm !: FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.forgotPasswordForm=this.fb.group({
      email:['',Validators.required,Validators.email]
    })
  }
  onSubmit()
  {
    if(this.forgotPasswordForm.valid)
    {
      console.log("valid data",this.forgotPasswordForm.value);
      console.log("do api call");
    }
    else
    {
      console.log("invalid data",this.forgotPasswordForm.value);
      console.log("no api call");
    }
  }
}
