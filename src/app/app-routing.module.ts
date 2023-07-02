import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DefaultComponent } from './layout/default/default.component';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { PostsComponent } from './module/posts/posts.component';
import { CreditcardComponent } from './module/creditcard/creditcard.component';
import { ApplycardComponent } from './module/applycard/applycard.component';
import { ApprovalComponent } from './module/approval/approval.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [

 {path:'login',component:LoginComponent},
{
  path:'',
component:DefaultComponent,canActivate:[AuthGuard],
children:[{
  path:'',
  component:DashboardComponent
},{
  path:'posts',
  component:PostsComponent
},
{
  path:'creditcard',
  component:CreditcardComponent
},
{
  path:'applycard',
  component:ApplycardComponent
},
{
  path:'approval',
  component:ApprovalComponent
}


]

}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]

})
export class AppRoutingModule { }
