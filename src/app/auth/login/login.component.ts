import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule ,ReactiveFormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  credentials = { username: '', password: '' };
  constructor(private authService : AuthService , private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.authService.login(this.credentials).subscribe(()=>{
      this.router.navigate(['/dashboard/users']);
    },
      error => {
        console.error('login error : ' , error);
      }
    );
  }

}
