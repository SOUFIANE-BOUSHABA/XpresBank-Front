import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransactionService } from '../../../../../services/transaction';
import { Transaction } from '../../../../../models/Transaction';

@Component({
  selector: 'app-select-transaction-type',
  templateUrl: './select-type.component.html',
  styleUrls: []
})
export class SelectTypeComponent implements OnInit {
  transactionForm!: FormGroup;
  transactionType: string = '';

  constructor(private fb: FormBuilder, private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.transactionForm = this.fb.group({
      transactionType: ['', Validators.required],
      sourceAccountNumber: ['', Validators.required],
      destinationAccountNumber: ['', Validators.required],
      amount: [0, [Validators.required, Validators.min(1)]],
      nextScheduledDate: [''],
      frequency: [''],
    });
  }

  onTransactionTypeChange(type: string): void {
    this.transactionType = type;
    this.transactionForm.get('transactionType')?.setValue(type);


    if (type === 'SCHEDULED') {
      this.transactionForm.get('nextScheduledDate')?.setValidators(Validators.required);
      this.transactionForm.get('frequency')?.setValidators(Validators.required);
    } else {
      this.transactionForm.get('nextScheduledDate')?.clearValidators();
      this.transactionForm.get('frequency')?.clearValidators();
    }

    this.transactionForm.get('nextScheduledDate')?.updateValueAndValidity();
    this.transactionForm.get('frequency')?.updateValueAndValidity();
  }

  onSubmit(): void {
    if (this.transactionForm.valid) {
      const formValue = this.transactionForm.value;

      const transaction: Transaction = {
        sourceAccountNumber: formValue.sourceAccountNumber,
        destinationAccountNumber: formValue.destinationAccountNumber,
        amount: formValue.amount,
        type: formValue.transactionType,
        nextScheduledDate: formValue.nextScheduledDate ? formValue.nextScheduledDate : null,
        frequency: formValue.frequency ? formValue.frequency : null,
      };

      this.transactionService.createTransaction(transaction).subscribe(
        (response) => {
          console.log('Transaction created successfully', response);
          this.transactionForm.reset();
          this.transactionType = '';
        },
        (error) => {
          console.error('Error creating transaction:', error);
        }
      );
    } else {
      console.error('Form is invalid. Please check the required fields.');
    }
  }
}
