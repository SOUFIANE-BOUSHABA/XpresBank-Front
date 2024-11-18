import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  isAdmin = false;
  isUser = false;
  isEmployer = false;

  ngOnInit(): void {
    const role = localStorage.getItem('role');

    if (role === 'ADMIN') {
      this.isAdmin = true;
    } else if (role === 'USER') {
      this.isUser = true;
    } else if (role === 'EMPLOYEE') {
      this.isEmployer = true;
    }
  }
}
