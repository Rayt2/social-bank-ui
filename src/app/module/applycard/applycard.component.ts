import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthServiceService } from 'src/app/auth-service.service';

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


  formGroup:any;
  ngOnInit(): void {
    
  }
  constructor(     private authServiceService: AuthServiceService,
    ){
    this.formGroup = new FormControl({
      
    })
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
       emial : this.email.value ,
      phone:this.phone.value,
    gender:this.gender.value}
    this.authServiceService.applyCard(data).subscribe({
      next: (response) => {
      },
      error: (error) => {
        console.log("out", error)

      }
    });


  }
}
