
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './create.component.html',
  styleUrls: []
})
export class CreateComponent implements OnInit {
  userForm!: FormGroup ;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      active: [false],
      age: [null],
      monthlyIncome: [null],
      creditScore: [null],
      debtToIncomeRatio: [null],
      bankingDuration: [null]
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      this.userService.createUser(this.userForm.value).subscribe(
        (newUser: User) => {
          console.log('User created successfully:', newUser);
          this.router.navigate(['/dashboard/users']);
        },
        error => {
          console.error('Error creating user:', error);
        }
      );
    }
  }
}
