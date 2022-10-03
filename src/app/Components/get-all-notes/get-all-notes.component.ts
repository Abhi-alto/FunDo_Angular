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
      console.log(res.noteList);
      this.noteArray=res.noteList;
      // this.noteArray = this.noteArray.filter((result:any) => {
      //   return result.isTrash == false && result.isArchive==false  
      // });
      // console.log(this.noteArray.noteList);
    })
  }
}

