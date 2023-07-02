import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthServiceService } from 'src/app/auth-service.service';
import { CardServiceService } from 'src/app/card-service.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-applycard',
  templateUrl: './applycard.component.html',
  styleUrls: ['./applycard.component.css']
})
export class ApplycardComponent implements OnInit{
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [Validators.required]);
  cardName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  firstName = new FormControl('', [Validators.required]);
  gender = new FormControl('', [Validators.required]);
  cardNameInput:any;
  standalone= true;
  durationInSeconds = 5;


  formGroup:any;
  constructor(     private cardServiceService: CardServiceService,private _snackBar: MatSnackBar
    ){
    this.formGroup = new FormControl({
      
    })
  }


  ngOnInit(): void {
    this.cardServiceService.selectedCardName.subscribe((value) => {
      this.cardNameInput = value;
    });
    
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getPhoneMessage(){
    if (this.phone.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('phone') ? 'Not a valid phone' : '';

  }

  


  submitCardDetails(){
    let data = {
      firstName : this.firstName.value, 
      lastName :this.lastName.value,
       cardName : this.cardName.value,
       email : this.email.value ,
      phone:this.phone.value,
    gender:this.gender.value}
    this.cardServiceService.applyCard(data).subscribe({
      next: (response) => {
        this._snackBar.open("Request Initiated New CreditCard",'',{
          duration:5000,
          verticalPosition:'top'
        })
      },
      error: (error) => {
        console.log("out", error)

      }
    });
    
    

  }
}
