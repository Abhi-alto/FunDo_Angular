import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userService/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm !: FormGroup;

  constructor(private fb:FormBuilder,private user:UserService) { }

  ngOnInit(): void {
    this.registerForm=this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      // email:['',Validators.required,Validators.email],
      email: ['', [Validators.required, Validators.email]],
      Password:['',[Validators.required,Validators.minLength(8)]],
      CPassword:['',Validators.required]
    })
  }
  onSubmit()
  {
    if(this.registerForm.valid)
    {
      console.log("valid data",this.registerForm.value);
      console.log("do api call");
      //api call : left side backend match and right side frontend match
      let data=
      {
        firstName:this.registerForm.value.firstName,
        lastName: this.registerForm.value.lastName,
        email: this.registerForm.value.email,
        password: this.registerForm.value.Password
      }
      this.user.register(data).subscribe((result:any)=>
      {
          console.log(result)
      })
    }
    else
    {
      console.log("invalid data",this.registerForm.value);
      console.log("no api call");
    }
  }

}


