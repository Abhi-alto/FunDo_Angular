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

  constructor(
    private note: NoteService,
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }
  ngOnInit(): void {
    console.log(this.data);
    this.title = this.data.title;
    this.description = this.data.description;
  }

  onNoClick(): void {
    this.dialogRef.close();
    let data={
      UserId:this.data.UserId,
      NoteID:this.data.NoteID,
      title:this.title,
      description:this.description,
      colour: "white",
      isPin: false,
      isReminder:false,
      isArchive: false,
      isTrash: false,
      reminder: "2022-10-03T01:31:54.721Z"
    }
    this.note.updateNote(data).subscribe((res:any)=> console.log(res))
  }
}

