import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-transaction',
  standalone: true,
  templateUrl: './create.component.html',
  styleUrls: []
})
export class CreateTransactionComponent {

  constructor(private router: Router) {}

  onContinue(): void {
    this.router.navigate(['/dashboard/transaction/create/select-type']);
  }
}
