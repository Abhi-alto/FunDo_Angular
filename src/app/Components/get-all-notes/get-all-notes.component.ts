import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  noteArray:any;

  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.getNote();
  }
  getNote()
  {
    this.note.getNote().subscribe((res:any)=>{
      this.noteArray=res.noteList;
      console.log(this.noteArray);
      this.noteArray = this.noteArray.filter((result:any) => {
        return result.isTrash == false && result.isArchive ==false
      });
    })
  }
  receiveMessage(event:any)
  {
    console.log(event);
    this.getNote();
  }
  // receivedMessage(events:any)
  //  {
  //   console.log(events);
  //   this.getNote();                     //called two times as it is reciving the old msg in this one 
  //   this.getNote();                     //in this one it is refreshing
  // }
}

