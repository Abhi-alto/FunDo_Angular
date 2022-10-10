import { Component, OnInit, Inject } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/Services/noteService/note.service';
//import { threadId } from 'worker_threads';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  title: any;
  description: any;
  colour:any;

  constructor(
    private note: NoteService,
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }
  ngOnInit(): void {
    console.log(this.data);
    this.title = this.data.title;
    this.description = this.data.description;
    this.colour=this.data.colour;
  }

  onClick(): void {
    let data={
      title:this.title,
      description:this.description,
      colour: this.colour,
      isPin: false,
      isReminder:false,
      isArchive: false,
      isTrash: false,
      reminder: "2022-10-03T01:31:54.721Z"
    }
    this.dialogRef.close();
    this.note.updateNote(data,this.data.noteID).subscribe((res:any)=> console.log(res))
  }
  message:any;
  receiveMessage(event:any) {
    console.log(event.color)
    this.message = event
    console.log(this.message)
  }
}

