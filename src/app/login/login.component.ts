import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup
    //emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
    private tokenKey:string = 'app_token';

  constructor(private formBuilder: FormBuilder,
    private authServiceService: AuthServiceService,
    private router: Router,

    ){}
  ngOnInit(){
   this.logInFormValidation();

  }

  logInFormValidation(){
    this.loginForm = this.formBuilder.group({
      userName: [null, [Validators.required]],
      password: [null, Validators.required]
    });
    
  }

 

  loginProcess(): void {
    if(this.loginForm.valid){
    this.authServiceService.login(this.loginForm.value).subscribe({
      next: (response) => {
        localStorage.setItem(this.tokenKey, JSON.stringify(response.body['token']));
        this.router.navigate(['/'])

      },
      error: (error) => {
        console.log("out", error)

      }
    });
  }
  }

  
  

}
