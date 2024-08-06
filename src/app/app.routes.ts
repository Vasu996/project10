import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ContantusComponent } from './contantus/contantus.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';

export const routes: Routes = [
    {path:"HOME",component:HomeComponent},
    {path:"SERVICES",component:ServicesComponent},
    {path:"ABOUT",component:AboutComponent},
    {path:"CONTANTUS",component:ContantusComponent},
    {path:"LOGIN",component:LoginComponent},
    {path:"SIGNIN",component:SigninComponent}

];
