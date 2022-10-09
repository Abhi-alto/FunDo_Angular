import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() childMessage: any;
  @Output() messageEvent = new EventEmitter<any>();
  @Output() newEvent = new EventEmitter<any>();
  //isArchive:any='fasle'
  // title:any;
  // description:any;

  comp: any;
  COMPONENT:any;
  archive: any = 'ArchiveComponent';
  trash: any = "TrashComponent";
  notes:any ="GetAllNotesComponent";
  
  constructor(private note:NoteService,private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.comp = this.route.snapshot.component
    this.COMPONENT=this.comp.name;
    console.log(this.COMPONENT)
  }
  Archive() 
  {
    this.note.archiveNote(this.childMessage,this.childMessage.noteID).subscribe((res:any) => 
    {
      console.log(res);
      this.messageEvent.emit(res);
    })
    console.log(this.childMessage);
    
  }
  Reminder()
  {
    this.note.reminderNote(this.childMessage.noteID).subscribe((res:any) => console.log(res))
    console.log(this.childMessage);
  }
  Trash()
  {
    this.note.trashNote(this.childMessage,this.childMessage.noteID).subscribe((res:any) => 
    {
      console.log(res);
      this.messageEvent.emit(res);
    })
    console.log(this.childMessage);
  }
    palette: any = [
    { "Background": "#FF0000" },
    {"Background": "Green" },
    {  "Background": "#0000FF" },
    {  "Background": "#FFA500" },
    {  "Background": "#FFFF00" },
    {  "Background": "#800000" },
    { "Background": "#000000" },
    {  "Background": "#808080" },
    {  "Background": "#FFFFFF" },
    {  "Background": "	#FFC0CB" },
    {  "Background": "#EE82EE" },
    {  "Background": "#FFD700" } 
  ];
  ColourPalette(choice:any)
  {
    console.log(this.childMessage,choice)
      console.log(choice);
      let data ={
        NoteID: this.childMessage.noteID,
        colour: choice
      }
      this.note.Colours(data,data.NoteID).subscribe((res:any)=>{
        console.log(res.colour);
        this.messageEvent.emit(res);
      })
  }
  Delete()
  {
    console.log(this.childMessage.noteID);
    let data ={
      NoteID: this.childMessage.noteID
      
    }
    this.note.deleteNote(data.NoteID).subscribe((res:any) => 
    {
      console.log(res);
      //this.messageEvent.emit(res);
    })
  }
}

