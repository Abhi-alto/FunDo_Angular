import { HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpService) { }
  register(data:any)
  {
    let header={
      header:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.http.postService('https://localhost:44319/User/Register',data,false,header)
  }
  login(data:any)
  {
    let header={
      header:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.http.postService('https://localhost:44319/User/LoginUser',data,false,header)
  }
  forgetPassword(data:any)
  {
    let header={
      header:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.http.postService(`https://localhost:44319/User/ForgetPassword/${data.email}`,data,false,header)
  }
 
}

