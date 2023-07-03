import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit  {

  constructor() { }
  userName:any;
  ngOnInit() {
    this.userName =localStorage.getItem('user_name');

  }

}