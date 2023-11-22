import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './home/admin-login/admin-login.component';
import { TajmacLoginComponent } from './home/tajmac-login/tajmac-login.component';
import { UserLoginComponent } from './home/user-login/user-login.component';
import { AdminHomeComponent } from './home/admin-login/admin-home/admin-home.component';
import { AddAdminComponent } from './home/tajmac-login/add-admin/add-admin.component';
import { AddSystemComponent } from './home/tajmac-login/add-system/add-system.component';
import { AdminsListComponent } from './home/tajmac-login/admins-list/admins-list.component';
import { SystemsListComponent } from './home/admin-login/systems-list/systems-list.component';
import { AddUserComponent } from './home/admin-login/add-user/add-user.component';
import { UsersListComponent } from './home/admin-login/users-list/users-list.component';
import { TajmacHomeComponent } from './home/tajmac-login/tajmac-home/tajmac-home.component';
import { AllSystemsComponent } from './home/tajmac-login/all-systems/all-systems.component';
import { AssignSystemComponent } from './home/admin-login/assign-system/assign-system.component';
import { UserHomeComponent } from './home/user-login/user-home/user-home.component';



export const appRoutes: Routes=[

{path: 'home', component : HomeComponent },

{
    path: 'tajmacLogin', component : HomeComponent,
    children: [{path : '', component : TajmacLoginComponent}]
},
{
    path: 'adminLogin', component : HomeComponent,
    children: [{path : '', component : AdminLoginComponent}]
},
{
    path: 'userLogin', component : HomeComponent,
    children: [{path : '', component : UserLoginComponent}]
},
{
    path: 'adminHome', component: AdminHomeComponent
},

{
    path: 'systemsList', component: AdminHomeComponent,
    children: [{path: '', component: SystemsListComponent}]
},

{
    path: 'addUser', component: AdminHomeComponent,
    children: [{path: '', component: AddUserComponent}]
},

{
    path: 'assignSystem', component: AdminHomeComponent,
    children: [{path: '', component: AssignSystemComponent}]
},

{
    path: 'usersList', component: AdminHomeComponent,
    children: [{path: '', component: UsersListComponent}]
},

{path: 'tajmacHome', component : TajmacHomeComponent},

{
    path: 'addAdmin', component: TajmacHomeComponent,
    children: [{path: '', component:AddAdminComponent}]
},

{
    path: 'adminsList', component: TajmacHomeComponent,
    children: [{path: '', component:AdminsListComponent}]
},

{
    path: 'addSystem', component: TajmacHomeComponent,
    children: [{path: '', component:AddSystemComponent}]
},

{
    path: 'allSystems', component: TajmacHomeComponent,
    children: [{path: '', component: AllSystemsComponent}]
},

{path: 'userHome', component: UserHomeComponent}

];