import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  //@Input() childMessage: any;
  isArchive:any;
  constructor(private note:NoteService) { }

  ngOnInit(): void {
  }


}
