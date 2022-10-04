import { Component, Input, OnInit, Output } from '@angular/core';
import {  EventEmitter } from '@angular/core';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  @Input() childMessage: any;
  @Output() messageEvent = new EventEmitter<any>();
  isShow=false;
  title:any;
  description:any;
  colour:any="white";

  constructor(private note:NoteService) { }

  ngOnInit(): void {
  }
  show()
  {
    this.isShow=true;
  }
  close()
  {
    this.isShow=false;
    console.log(this.title,this.description);
    let data={title:this.title,
              description:this.description,colour:"white"}
    this.note.addNote(data).subscribe((result:any)=>{
      console.log(result);
      this.messageEvent.emit(result);                           //message (entire data array) emitted to the get all notes(parent component) 
    })
            }


}
