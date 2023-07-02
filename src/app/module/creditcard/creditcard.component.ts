import { Component,OnInit } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.css']
})
export class CreditcardComponent implements OnInit  {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog(cardName:String,offer:Number,annualFee:Number,eligbility:String){
   
    

this.dialog.open(DialogComponent,{
  width:'60%',
  data: { 
    name:cardName,
    cardOffer:offer,
    fee:annualFee,
    eligbility:eligbility
  }
})


  }
}
