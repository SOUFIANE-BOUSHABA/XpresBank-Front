import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit-request-done',
  templateUrl: './done.component.html',
  styleUrls: []
})
export class CreditRequestDoneComponent {
  constructor(private router: Router) {}

  goBackToDashboard(): void {
    this.router.navigate(['/dashboard/credit-request-user']);
  }
}
