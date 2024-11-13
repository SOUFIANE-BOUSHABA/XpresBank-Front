
import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../../../services/transaction';
import { Transaction } from '../../../../models/Transaction';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './read.component.html',
  styleUrls: []
})

export class ReadComponent implements OnInit {

  transactions: Transaction[] = [];

  constructor(private transactionService: TransactionService, private router: Router) {}

  ngOnInit(): void {
    this.loadUserTransactions();
  }

  loadUserTransactions(): void {
    this.transactionService.getUserTransactions().subscribe(
      (transactions) => {
        this.transactions = transactions;
      },
      (error) => {
        console.error('Error fetching transactions:', error);
      }
    );
  }

  navigateToCreateTransaction(): void {
    this.router.navigate(['/dashboard/transaction/create']);
  }


  getStatusClass(status: string): string {
    switch (status) {
      case 'APPROVED':
        return 'bg-teal-500 text-white opacity-75';
      case 'PENDING':
        return 'bg-purple-500 text-white opacity-75';
      case 'REJECTED':
        return 'bg-orange-500 text-white opacity-75';
      default:
        return 'bg-gray-500 text-white opacity-75';
    }
  }


}
