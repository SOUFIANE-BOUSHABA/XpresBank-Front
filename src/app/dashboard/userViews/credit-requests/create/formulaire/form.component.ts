import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreditRequestService } from '../../../../../services/credit-request';
import { Router } from '@angular/router';
import { CreditRequest } from '../../../../../models/CreditRequest';

@Component({
  selector: 'app-credit-request-create',
  templateUrl: './form.component.html',
  styleUrls: []
})
export class CreditRequestFormComponent implements OnInit {
  creditRequestForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private creditRequestService: CreditRequestService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.creditRequestForm = this.fb.group({
      amount: [0, [Validators.required, Validators.min(100)]],
      interestRate: [0, [Validators.required, Validators.min(0)]],
      startDate: ['', Validators.required],
      endDate: ['']
    });
  }

  onSubmit(): void {
    if (this.creditRequestForm.valid) {
      const formValue = this.creditRequestForm.value;
      const creditRequest: CreditRequest = {
        amount: formValue.amount,
        interestRate: formValue.interestRate,
        startDate: new Date(formValue.startDate),
        endDate: formValue.endDate ? new Date(formValue.endDate) : undefined,
        status: 'PENDING'
      };

      console.log(creditRequest);

      this.creditRequestService.createCreditRequest(creditRequest).subscribe({
        next: () => {
          this.router.navigate(['/dashboard/credit-request-user/done']);
        },
        error: (err) => {
          console.error('Error submitting credit request', err);
        }
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/dashboard/credit-request-user/create']);
  }
}
