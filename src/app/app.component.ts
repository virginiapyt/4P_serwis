import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LiczbyComponent } from './liczby/liczby.component';
import { OsobyComponent } from './osoby/osoby.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LiczbyComponent,OsobyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'serwisosoby';
}
