import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {FormsModule} from '@angular/forms'
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpErrorResponse, HttpClient,  HttpHeaders } from '@angular/common/http';
import {RequestOptions, Http,HttpModule, Headers} from '@angular/http';

import {NoopAnimationsModule} from '@angular/platform-browser/animations';
//importing angular material for designing tools
import {MatMenuModule,  MAT_MENU_SCROLL_STRATEGY, MatButton,
   MatMenuContent, MatCardContent, MatSidenav} from '@angular/material';

import { AppComponent } from './app.component';

import {AdminservicService} from './shared/adminservic.service';
//import {Admin} from './shared/admin.model';
//import {systemsDetail} from './shared/systemDetails';
import { HomeComponent } from './home/home.component';
import { TajmacLoginComponent } from './home/tajmac-login/tajmac-login.component';
import { AdminLoginComponent } from './home/admin-login/admin-login.component';
import { UserLoginComponent } from './home/user-login/user-login.component';
import { appRoutes } from './routes';
import { AdminsListComponent } from './home/tajmac-login/admins-list/admins-list.component';
//import { SystemsListComponent } from './home/tajmac-login/systems-list/systems-list.component';
import {SystemsListComponent} from './home/admin-login/systems-list/systems-list.component';
import { AddAdminComponent } from './home/tajmac-login/add-admin/add-admin.component';
import { AddSystemComponent } from './home/tajmac-login/add-system/add-system.component';
import { UsersListComponent } from './home/admin-login/users-list/users-list.component';
import { AddUserComponent } from './home/admin-login/add-user/add-user.component';
import { AdminHomeComponent } from './home/admin-login/admin-home/admin-home.component';

import {Form, NgForm, NgModel,FormsModule,  ReactiveFormsModule} from '@angular/forms';
import {MatInputModule, MatTableModule } from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import { UserHomeComponent } from './home/user-login/user-home/user-home.component';
import { TajmacHomeComponent } from './home/tajmac-login/tajmac-home/tajmac-home.component';
import { AllSystemsComponent } from './home/tajmac-login/all-systems/all-systems.component';
import { AssignSystemComponent } from './home/admin-login/assign-system/assign-system.component';
import { TajmacServiceService } from './shared/tajmac-service.service';
import { UserServiceService } from './shared/user-service.service';
import { AdminService } from './home/admin-login/sharedService/admin.service';
import { UserModel } from './home/admin-login/sharedService/user-model.model';
import { CustSystem } from './home/admin-login/sharedService/cust-system.model';
import { SysAssignComponent } from './home/tajmac-login/sys-assign/sys-assign.component';
//check this component accesibility import { SystemsDetailComponent } from './shared/systems-detail/systems-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TajmacLoginComponent,
    AdminLoginComponent,
    UserLoginComponent,
    HomeComponent,
    AdminsListComponent,
    SystemsListComponent,
    AddAdminComponent,
    AddSystemComponent,
    UsersListComponent,
    AddUserComponent,
    AdminHomeComponent,
    UserHomeComponent,
    TajmacHomeComponent,
    AllSystemsComponent,
    AssignSystemComponent,
    SysAssignComponent
    
  //  SystemsDetailComponent,  
  ],
  imports: [
    MatInputModule,
    MatTableModule,
    MatSidenavModule,
    MatSelectModule,
    MatToolbarModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AdminservicService, TajmacServiceService, UserServiceService, AdminService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
