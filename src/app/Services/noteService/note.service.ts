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
  updateNote(data:any,NoteID:any)
  {
    console.log(this.token);
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.putService(`https://localhost:44319/Note/UpdateNote/${NoteID}`,data, true, header)  
  }
  archiveNote(data:any,NoteID:any)
  {
    console.log(this.token);
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.putService(`https://localhost:44319/Note/Archive/${NoteID}`,data, true, header)
  }
  reminderNote(NoteID:any)
  {
    console.log(this.token);
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.putService(`https://localhost:44319/Note/Reminder/${NoteID}`,"2022-01-01T00:00:00.000Z", true, header)
  }
  trashNote(data:any,NoteID:any)
  {
    console.log(this.token);
    let header={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
     return this.http.putService(`https://localhost:44319/Note/Trash/${NoteID}`,data, true, header)
}
}

