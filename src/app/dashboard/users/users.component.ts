import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(private router: Router, private userService: UserService) {}


  ngOnInit(): void {
    this.fetchAllUsers();
  }



fetchAllUsers(): void {
  this.userService.getAllUsers().subscribe(
    (data) => this.users = data,
    (error: HttpErrorResponse) => console.error('Error fetch users:', error.message)
  );
}



  navigateToCreateUser(): void {
    this.router.navigate(['/dashboard/user/create-user']);
  }

  navigateToEditUser(userId: number): void {
    this.router.navigate([`/dashboard/user/update-user`, userId]);
  }


  deleteUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe(
      () => {
        console.log('User deleted successfully');
        this.fetchAllUsers();
      },
      (error) => {  console.error('Error deleting user:', error);  }
    );
  }




}
