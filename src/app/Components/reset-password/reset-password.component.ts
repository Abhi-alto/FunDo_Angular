import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm !: FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void
  {
      this.resetPasswordForm=this.fb.group(
      {
         Password:['',Validators.required,Validators.minLength(8)],
        CPassword:['',Validators.required]
      })
  }
  onSubmit()
  {
    if(this.resetPasswordForm.valid)
    {
      console.log("valid data",this.resetPasswordForm.value);
      console.log("do api call");
    }
    else
    {
      console.log("invalid data",this.resetPasswordForm.value);
      console.log("no api call");
    }
  }

}
