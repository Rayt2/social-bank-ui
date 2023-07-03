import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { CardServiceService } from 'src/app/card-service.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent {

  displayedColumns: string[] = ['userName', 'cardName','email','gender','phone','action'];
  //dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  getAllCardData:any;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  ngOnInit(): void {
    this.getAllCardDetails();
  }
  constructor( private cardServiceService:CardServiceService,private _snackBar: MatSnackBar){({})
  }

 

  ngAfterViewInit() {
    this.getAllCardData.paginator = this.paginator;
  }


  getAllCardDetails() {
    let userName =localStorage.getItem('user_name');

    this.cardServiceService.getAllCardDetails().subscribe((data) => {
      this.getAllCardData =data.filter(
        (obj:any)=>{
          return obj.userName ===userName
        }
      )
    });
  }

  
  

}

    


