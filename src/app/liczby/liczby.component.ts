import { Component } from '@angular/core';
import { KalkulatorService } from '../kalkulator.service';

@Component({
  selector: 'app-liczby',
  standalone: true,
  imports: [],
  templateUrl: './liczby.component.html',
  styleUrl: './liczby.component.css'
})
export class LiczbyComponent {

  suma = 0
  constructor(kalkulator:KalkulatorService){
  this.suma=kalkulator.dodaj(2,2,5,7)
  }
}
