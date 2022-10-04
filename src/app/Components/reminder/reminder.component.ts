import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit {

  noteArray:any;
  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.reminderNote();
  }
  reminderNote()
  {
    this.note.getNote().subscribe((res:any)=>{
      console.log(res);
      this.noteArray=res.noteList;
      this.noteArray = this.noteArray.filter((result:any) => {
        return result.isTrash == false &&  result.isReminder==true 
      });
      console.log(this.noteArray);
    })
  }
}
