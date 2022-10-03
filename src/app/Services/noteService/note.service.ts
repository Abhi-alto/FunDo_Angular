import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token:any;

  constructor(private http:HttpService) { 
    this.token=localStorage.getItem('token');
  }
  addNote(data:any)
  {
    console.log(data,this.token);
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.postService('https://localhost:44319/Note/AddNote', data, true, header)   
  }
  getNote()
  {
    console.log(this.token);
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.getService('https://localhost:44319/Note/GetAllNote', true, header)   
  }
  updateNote(data:any)
  {
    console.log(this.token);
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.putService(`https://localhost:44319/Note/UpdateNote/${data.NoteID}`,data, true, header)  
  }
}

