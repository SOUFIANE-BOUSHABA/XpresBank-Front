import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: []
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      active: [true, Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe({
        next: response => console.log('User registered successfully', response),
        error: error => console.error('Registration error', error)
      });
    }
  }
}
