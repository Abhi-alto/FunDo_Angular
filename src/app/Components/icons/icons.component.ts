import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() childMessage: any;
  //isArchive:any='fasle'
  // title:any;
  // description:any;
  constructor(private note:NoteService) { }

  ngOnInit(): void {
  }
  Archive() 
  {
    this.note.archiveNote(this.childMessage,this.childMessage.noteID).subscribe((res:any) => console.log(res))
    console.log(this.childMessage);
  }
  Reminder()
  {
    this.note.reminderNote(this.childMessage.noteID).subscribe((res:any) => console.log(res))
    console.log(this.childMessage);
  }
  Trash()
  {
    this.note.trashNote(this.childMessage,this.childMessage.noteID).subscribe((res:any) => console.log(res))
    console.log(this.childMessage);
  }
}
