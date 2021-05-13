
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

import { AuthGuardService } from './helpers/auth-guard.service';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuardService] },
    { path: "login", component: LoginComponent },
    { path: "home", component: HomeComponent, canActivate: [AuthGuardService] },
    { path: "**", redirectTo: '' }
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);