import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../../services/transaction';
import { Transaction } from '../../../models/Transaction';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-transactions',
  templateUrl: './manage.component.html',
  styleUrls: []
})
export class ManageTransactionsComponent implements OnInit {
  transactions: Transaction[] = [];

  constructor(
    private transactionService: TransactionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions(): void {
    this.transactionService.getAllTransactions().subscribe(
      (response) => {
        this.transactions = response;
      },
      (error) => {
        console.error('Error fetching transactions', error);
      }
    );
  }

  approveTransaction(transactionId: number): void {
    this.transactionService.approveTransaction(transactionId).subscribe(
      () => {

        this.getTransactions();
      },
      (error) => {
        console.error('Error approving transaction', error);

      }
    );
  }

  rejectTransaction(transactionId: number): void {
    this.transactionService.rejectTransaction(transactionId).subscribe(
      () => {

        this.getTransactions();
      },
      (error) => {
        console.error('Error rejecting transaction', error);
      }
    );
  }



  getStatusClass(status: string): string {
    switch (status) {
      case 'PENDING':
        return 'bg-yellow-500 text-white';
      case 'APPROVED':
        return 'bg-green-500 text-white';
      case 'REJECTED':
        return 'bg-red-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  }



}
