import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { User } from '../../model/model.user';
import { Role } from '../../model/model.role';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;

}
// le menu de la sidebar chaque item redirege vers un composant
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '', },
    { path: '/infos-connections', title: 'Connection Information',icon:'content_paste',class: '' },
    {path:'/delivery', title: 'Delivery', icon:'content_paste', class: ''},
    {path:'/list-users', title: "Users List", icon:'perm_contact_calendar', class: ''},
    { path: '/user-profile', title: "User Profile",  icon:'person', class: '' },
    {path:'/delivery-settings',title:"Delivery Settings",icon:'build',class:''},

];
export const ROUTES2: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '', },
  { path: '/infos-connections', title: 'Connection Information',icon:'content_paste',class: '' },
  {path:'/delivery', title: 'Delivery', icon:'content_paste', class: ''},
  {path:'/delivery-settings',title:"Delivery Settings",icon:'build',class:''},

];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
private user:any;
private role:any;
  constructor(private sv:AuthService) { }

  ngOnInit() {

this.user= this.sv.getuser();
this.user.authorities.forEach(element => {
 if(element.authority=="ADMIN"){
  this.menuItems = ROUTES.filter(menuItem => menuItem);
 }
 else {
  this.menuItems = ROUTES2.filter(menuItem => menuItem);
 }
});

    
   
 
  }

}
