import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private authService : AuthService , private router : Router) { }


  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
