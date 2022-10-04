import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  //@Input() childMessage: any;
  noteArray:any;
  notesArchived:any;
  constructor(private note:NoteService) { }

  ngOnInit(): void {
     this.ArchiveNote();
  }
   ArchiveNote()
  {
  //  if(this.data.noteID==NoteID)
      this.note.getNote().subscribe((res:any)=>{
      console.log(res.noteList);

      this.noteArray=res.noteList;

      this.noteArray = this.noteArray.filter((result:any) => {
        return  result.isArchive==true && result.isTrash==false
      });
      
      console.log(this.noteArray);
    })
  }
}
