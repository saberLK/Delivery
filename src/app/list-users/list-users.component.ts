import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
users:any[];
  constructor(public userservice:UserService,private router:Router) {
    this.userservice.getUser().subscribe(users=>{
      this.users = users;
    })
   }

  ngOnInit() {
  }
 Delete(id){
this.userservice.deleteUser (id).subscribe(res =>{
this.users.splice(this.users.indexOf(id),1)
});
  }
  Update(user){
this.userservice.setter(user);
this.router.navigate(['/user-profile'])
  }
}
