import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit{
inputData:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,private ref:MatDialogRef<DialogComponent>){

  }
 ngOnInit(): void {
  this.inputData=this.data
   
 }

}
