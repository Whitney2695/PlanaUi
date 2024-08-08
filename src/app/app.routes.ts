import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ManagerComponent } from './components/manager/manager.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { LandingComponent } from './components/landing/landing.component';
import { NavbarComponent } from './components/navbar/navbar.component';



export const routes: Routes = [
    {path: '', component:LandingComponent},
    {path: 'land', component:LandingComponent},
    {path: 'register', component:RegisterComponent},
    {path: 'login', component:LoginComponent},
    {path: 'manager', component:ManagerComponent},
    {path: 'user', component:UserDashboardComponent},
    {path: 'admin', component:AdminDashboardComponent},
    {path: 'nav', component:NavbarComponent},


    
];
