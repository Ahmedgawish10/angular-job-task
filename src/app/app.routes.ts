import { Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [

    { path: 'users', component: HomeComponent },
    {path:"users/:id",component:UserDetailsComponent},
    { path: '', redirectTo: '/users', pathMatch: 'full' },
];
