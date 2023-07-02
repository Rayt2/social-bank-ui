import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/module/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/module/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { MatSidenavModule } from '@angular/material/sidenav';
import {  MatDividerModule } from '@angular/material/divider';
import {  MatTableModule } from '@angular/material/table';
import {  MatPaginatorModule } from '@angular/material/paginator';

import {  MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CreditcardComponent } from 'src/app/module/creditcard/creditcard.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/module/dialog/dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ApplycardComponent } from 'src/app/module/applycard/applycard.component';
import { MatSelectModule } from '@angular/material/select';
import { ApprovalComponent } from 'src/app/module/approval/approval.component';
import {MatSnackBar, MatSnackBarRef, MatSnackBarModule} from '@angular/material/snack-bar';
import { PopupComponent } from 'src/app/module/popup/popup.component';


@NgModule({
  declarations: [DefaultComponent,
  DashboardComponent,
PostsComponent,CreditcardComponent,
DialogComponent,ApprovalComponent,ApplycardComponent,PopupComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
    NgIf,
    MatPaginatorModule,
    MatTableModule,
    MatSnackBarModule
  ]
})
export class DefaultModule { }
