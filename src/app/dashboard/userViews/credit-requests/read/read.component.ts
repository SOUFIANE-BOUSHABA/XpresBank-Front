import { Component, OnInit } from '@angular/core';
import { CreditRequestService } from '../../../../services/credit-request.service';
import { CreditRequest } from '../../../../models/CreditRequest';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit-requests',
  templateUrl: './read.component.html',
  styleUrls: []
})
export class CreditRequestsUserComponent implements OnInit {

  creditRequests: CreditRequest[] = [];

  constructor(private creditRequestService: CreditRequestService, private router: Router) {}

  ngOnInit(): void {
    this.loadCreditRequests();
  }

  loadCreditRequests(): void {
    this.creditRequestService.getAllCreditRequests().subscribe(
      (requests) => {
        this.creditRequests = requests;
      },
      (error) => {
        console.error('Error fetching credit requests:', error);
      }
    );
  }

  navigateToCreateCredit(): void {
    this.router.navigate(['/dashboard/credit-request-user/create']);
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
