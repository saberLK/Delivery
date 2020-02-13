import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UrlPermission } from './services/url.permission';
import { LoginComponent } from './login/login.component';


const routes: Routes =[
   //{ path: 'Dashboard', component: DashboardComponent ,canActivate: [UrlPermission] },
   { path: 'login', component: LoginComponent },
   { path: '', redirectTo: '/login',pathMatch: 'full' },

   // otherwise redirect to profile
   
 {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule',
       canActivate: [UrlPermission]
  }]}

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
