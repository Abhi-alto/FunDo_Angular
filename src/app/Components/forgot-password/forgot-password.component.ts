import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userService/user.service';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm !: FormGroup;

  constructor(private fb:FormBuilder,private user:UserService) { }

  ngOnInit(): void {
    this.forgotPasswordForm=this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }
  onSubmit()
  {
    if(this.forgotPasswordForm.valid)
    {
      console.log("valid data",this.forgotPasswordForm.value);
      console.log("do api call");
      let data=
      {
        email: this.forgotPasswordForm.value.email
      }
      this.user.login(data).subscribe((result:any)=>
      {
          console.log(result)
      })
    }
    else
    {
      console.log("invalid data",this.forgotPasswordForm.value);
      console.log("no api call");
    }
  }
}
