import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [ReactiveFormsModule ,  CommonModule,
    RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  users: User[] = [
    { id: 1, username: 'johndoe', email: 'john@example.com', role: 'Admin', active: true },
    { id: 2, username: 'janedoe', email: 'jane@example.com', role: 'User', active: true },
  ];

  constructor() {}

  ngOnInit(): void {}
}
