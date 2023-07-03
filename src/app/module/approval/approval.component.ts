import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { CardServiceService } from 'src/app/card-service.service';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})
export class ApprovalComponent implements AfterViewInit{
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
    this.cardServiceService.getAllCardDetails().subscribe((data) => {
      this.getAllCardData = data
    });
  }

  approveCard(cardName:any,email:any,status:any){
    let data={
      cardName:cardName,
      email:email,
      status:status,
      userName:localStorage.getItem('user_name')

    }
    this.cardServiceService.approvCard(data).subscribe((response) => {
      this._snackBar.open("Approval/Cancel Done",'',{
        duration:2000,
        verticalPosition:'top'
      })
      this.getAllCardData = response
      window.location.reload()

    });

  }

}

    
  

  


