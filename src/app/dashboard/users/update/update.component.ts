import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './update.component.html',
  styleUrls: []
})


export class UpdateComponent implements OnInit {
  userForm!: FormGroup;
  userId!: number;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      password: [''],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      active: [false],
      age: [null],
      monthlyIncome: [null],
      creditScore: [null],
      debtToIncomeRatio: [null],
      bankingDuration: [null]
    });


    this.userService.getUserById(this.userId).subscribe(
      (user: User) => {
        this.userForm.patchValue(user);
      },
      error => {
        console.error('Error fetching user data:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      this.userService.updateUser(this.userId, this.userForm.value).subscribe(
        (updatedUser: User) => {
          console.log('User updated successfully:', updatedUser);
          this.router.navigate(['/dashboard/users']);
        },
        error => {
          console.error('Error updating user:', error);
        }
      );
    }
  }
}
