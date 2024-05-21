import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UsersService } from '../services/users.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [NgFor,RouterLink],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  userId!: number;
   selecteUser:any=[];
  constructor(private _UsersService: UsersService,private route: ActivatedRoute,) {}

  ngOnInit(): void {
    // Get the user ID from the route parameter url
    this.route.params.subscribe(params => {
      this.userId = params['id'];
      this._UsersService.getUsers( this.userId).subscribe((user)=>{
        this.selecteUser=[user.data]        
        console.log("Welcome "+this.selecteUser[0].first_name)

        
      })
    
    });
  }
}
