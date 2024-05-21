import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { NgClass, NgFor } from '@angular/common';
import './home.component.css';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor,HeaderComponent,RouterOutlet,NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private _UsersService: UsersService,private router:Router) {}
  arrUsers: any;
  ngOnInit() {
    this._UsersService.getUsers().subscribe((el) => {
      console.log("our users",el.data);
    });

     this._UsersService.behaviorSubject.subscribe((userIdInput) => {
     // if userIdInput display all users
      if (userIdInput == 0) {
        this._UsersService.getUsers().subscribe((response) => {
          this.arrUsers = response.data;
        });
      }
       // else  display the selected user
       else {
        this._UsersService.getUsers(userIdInput).subscribe((selectedUsers) => {
          this.arrUsers = [selectedUsers.data];
        });
      }
    });
  }

//take the user to single user details
  navigateUser(user:any){
    this.router.navigate(['/users', user.id]);

    
  }


}
