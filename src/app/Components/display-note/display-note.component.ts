import { Component, Input, OnInit,Inject, EventEmitter, Output } from '@angular/core';
//import {Component, } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
  notes:any;
  //Archive:any=false;
  @Input() childMessage: any;
  @Output() messageEvent = new EventEmitter<any>();
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '500px',
      data: note, 
      panelClass: 'my-panel-class'
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      console.log('The dialog was closed');

    });
  }
  sendmsg()
  {
    
  }
  receiveMessage(event:any)
  {
    console.log(event);
    this.messageEvent.emit(event);
  }

}
