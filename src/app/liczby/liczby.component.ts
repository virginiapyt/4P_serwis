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

  licznik = 0

  constructor(private kalkulator:KalkulatorService){
  this.suma=kalkulator.dodaj(2,2,5,7)
  this.licznik = kalkulator.getLicznik()
  }

  //metoda z komponentu uzywa metody serwisu
  powieksz(){
    this.licznik = this.kalkulator.zwieksz()
  }
}
