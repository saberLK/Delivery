import { Component, OnInit } from '@angular/core';
import { User } from '../model/model.user';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import { RoleService } from '../services/role.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
private user:any;
private roless:any[];
  constructor(private userService:UserService,private router:Router,private roleService:RoleService) { }

  ngOnInit() {
    this.user=this.userService.getter();

   this.roleService.getRoles().subscribe(data=>{
     this.roless = data;
   })
 
  }
Update(user){
  this.userService.updateUser(user).subscribe(data => data)

  this.router.navigateByUrl('/list-users');



}

}
