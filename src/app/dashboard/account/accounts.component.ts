
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Account } from '../../models/account';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './accounts.component.html',
  styleUrls: []
})
export class AccountsComponent implements OnInit {
  accounts: Account[] = [];
  token = localStorage.getItem('token') || '';

  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit(): void {
    this.loadAccounts();
  }

  loadAccounts(): void {
    this.accountService.getAllAccounts().subscribe(
      (accounts) => {
        this.accounts = accounts;
      },
      (error) => {
        console.error('Error fetching accounts:', error);
      }
    );
  }

  deleteAccount(accountId: number): void {
    this.accountService.deleteAccount(accountId).subscribe(
      () => {
        console.log('Account deleted successfully');
        this.loadAccounts();
      },
      (error) => {
        console.error('Error deleting account:', error);
      }
    );
  }

  onStatusChange(accountId: number, newStatus: 'ACTIVE' | 'BLOCKED'): void {
    this.accountService.updateAccountStatus(accountId, newStatus).subscribe(
      () => {
        this.loadAccounts();
      },
      (error) => {
        console.error('Error updating account status:', error);
      }
    );
  }
}
