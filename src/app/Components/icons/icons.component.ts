import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  isArchive:any='fasle'
  title:any;
  description:any;
  constructor(private note:NoteService) { }

  ngOnInit(): void {
  }
  Archive()
  {
    if(this.isArchive==false)
    {
      this.isArchive=true;
    }
    else{
      this.isArchive=false;
    }
    console.log(this.isArchive);
    // let data={
    //   title:this.title,
    //   description:this.description,
    //   isArchive: this.isArchive,
    //   reminder: "2022-10-03T01:31:54.721Z"
    // }
    // console.log(data);
    //this.note.archiveNote(data,this.data.noteID).subscribe((res:any)=> console.log(res))
  }
}
