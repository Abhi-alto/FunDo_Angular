import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm !: FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.registerForm=this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required,Validators.email],
      Password:['',Validators.required,Validators.minLength(8)],
      CPassword:['',Validators.required]
    })
  }
  onSubmit()
  {
    if(this.registerForm.valid)
    {
      console.log("valid data",this.registerForm.value);
      console.log("do api call");
    }
    else
    {
      console.log("invalid data",this.registerForm.value);
      console.log("no api call");
    }
  }

}
