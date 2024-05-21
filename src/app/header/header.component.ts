import { Component, ElementRef, ViewChild } from '@angular/core';
import { UsersService } from '../services/users.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';
import './header.component.css';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, HttpClientModule, NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private _UsersService: UsersService) {}
  @ViewChild('search', { static: false }) inputRef?: ElementRef;

  userIdInput?: any;
  users: any[] = [];
  public inputSearch!: any;

  ngOnInit() {
    // after the page loaded set and fire this function
    this.fetchUsers();
  }

  searchUser() {
    // the input search
    this.inputSearch = this.inputRef?.nativeElement;
    // if the input search empty or you typed and empty again
    if (!this.inputSearch.value) {
      this._UsersService.behaviorSubject.next(0);
    }
    //if there any userIdInput fire this
    if (this.userIdInput) {
      if (this.userIdInput >= 7 || this.userIdInput == 0) {
        alert('not user found ');
        this._UsersService.behaviorSubject.next(0);
        this.userIdInput = '';
        return;
      } else {
        // send the id user that you want to show it
        this._UsersService.behaviorSubject.next(this.userIdInput);
        this._UsersService
          .getUsers(this.userIdInput)
          .subscribe((response: any) => {
            this.users = [response.data]; // Store the single user as an array
          });
      }
    }
    //else if you dont do any thing  show all users
    else {
      this.fetchUsers(); // If no search query provided, fetch all users
    }
  }

  // return all users
  fetchUsers() {
    this._UsersService.behaviorSubject.next(0);

    this._UsersService.getUsers().subscribe((response: any) => {
      this.users = response.data;
    });
  }

  // reset all users
  resetUsers() {
    this._UsersService.behaviorSubject.next(0);
    this.userIdInput = '';
  }
}
