import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AccountService } from '../../../../services/account.service';
import { Account } from '../../../../models/account';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create.component.html',
  styleUrls: []
})
export class CreateAccountComponent implements OnInit {
  accountForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService
  ) {}


  ngOnInit(): void {
    this.accountForm = this.fb.group({
      accountNumber: ['', Validators.required],
      balance: [0, [Validators.required, Validators.min(0)]],
      status: ['ACTIVE', Validators.required]
    });
  }



  onSubmit(): void {
    if (this.accountForm.valid) {
      const newAccount: Account = this.accountForm.value;

      this.accountService.createAccount(newAccount).subscribe(
        (createdAccount: Account) => {
          console.log('Account created successfully:', createdAccount);
        },
        (error) => {
          console.error('Error creating account:', error);
        }
      );
    } else {
      console.log('Form is not valid');
    }
  }
}
