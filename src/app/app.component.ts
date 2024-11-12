import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink , ReactiveFormsModule , FormsModule  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'XpresBank-Front';
}
