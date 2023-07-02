import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit  {

  constructor(private router: Router) { }
  userName:any;
  ngOnInit() {
    this.userName =localStorage.getItem('user_name');

  }
  redirectToCard(){
    this.router.navigate(['/creditcard']);


  }
  redirectToApproval(){
    this.router.navigate(['/approval']);


  }

}
