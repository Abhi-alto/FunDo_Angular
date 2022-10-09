import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpclient:HttpClient) { }
  postService(url:string, reqdata:any, token:boolean=false, httpOptions:any)
  {
    console.log(reqdata);
    return this.httpclient.post(url, reqdata, token && httpOptions)
  }
  putService(url:string, reqdata:any, token:boolean=false, httpOptions:any)
  {
    console.log(reqdata);
    return this.httpclient.put(url,reqdata,  token && httpOptions)
  }
  
  getService(url:string, token:boolean=false, httpOptions:any)
  {
    return this.httpclient.get(url, token && httpOptions)
  }
  deleteService(url:string, token:boolean=false, httpOptions:any)
  {
    return this.httpclient.delete(url, token && httpOptions);
  }
}