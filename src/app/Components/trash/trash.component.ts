import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
noteArray:any;
  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.trashNote();
  }
  trashNote()
  {
  //  if(this.data.noteID==NoteID)
      this.note.getNote().subscribe((res:any)=>{
      console.log(res.noteList);

      this.noteArray=res.noteList;

      this.noteArray = this.noteArray.filter((result:any) => {
        return  result.isTrash==true 
      });
      
      console.log(this.noteArray);
    })
  }

}
