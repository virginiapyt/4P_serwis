import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KalkulatorService {

  constructor() { }
  
  private licznik = 0

  getLicznik():number{
    return this.licznik
  }

  zwieksz():number{
      this.licznik ++
      return this.licznik
  }

  dodaj(...liczby:number[]):number{
    let wynik = 0
    for (let wartosc of liczby){
      wynik+=wartosc
    }
    return wynik
  }
}
