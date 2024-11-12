
import { Component, OnInit } from '@angular/core';
import { CreditRequestService } from '../../services/credit-request.service';
import { CreditRequest } from '../../models/credit-request';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-credit-requests',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './credit-requests.component.html',
  styleUrls: []
})
export class CreditRequestsComponent implements OnInit {
  creditRequests: CreditRequest[] = [];

  constructor(private creditRequestService: CreditRequestService) {}

  ngOnInit(): void {
    this.loadCreditRequests();
  }

  loadCreditRequests(): void {
    this.creditRequestService.getAllCreditRequests().subscribe(
      (creditRequests) => {
        this.creditRequests = creditRequests;
      },
      (error) => {
        console.error('Error fetching credit requests:', error);
      }
    );
  }

  onStatusChange(creditRequestId: number, status: 'PENDING' | 'APPROVED' | 'REJECTED' | 'COMPLETED'): void {
    console.log(`Changing status of request ${creditRequestId} to ${status}`);
  }

  approveCreditRequest(creditRequestId: number, approve: boolean): void {
    this.creditRequestService.approveCreditRequest(creditRequestId, approve).subscribe(
      (updatedRequest) => {
        console.log(`Credit request status updated:`, updatedRequest);
        this.loadCreditRequests();
      },
      (error) => {
        console.error('Error approving/rejecting credit request:', error);
      }
    );
  }
}
