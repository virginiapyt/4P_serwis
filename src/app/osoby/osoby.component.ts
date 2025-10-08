import { Component } from '@angular/core';
import { Osoba } from '../osoba';
import { Plec } from '../osoba';
@Component({
  selector: 'app-osoby',
  standalone: true,
  imports: [],
  templateUrl: './osoby.component.html',
  styleUrl: './osoby.component.css'
})
export class OsobyComponent {
 
  ludzie:Osoba[]=[
    {
      id:1 ,
      imie: 'Ola',
      nazwisko: 'Nowak',
      dataUr: '2010-05-06',
      zdjecie: 'ola.jpg',
      plec: Plec.K,
      waga: 55,
      wzrost: 165
    },
  {
    id:2,
    imie: 'Marek',
    nazwisko: 'Kowalski',
    dataUr: '2009-06-07',
    zdjecie: 'marek.jpg',
    plec: Plec.M,
    waga: 70,
    wzrost: 180
  },{
      id:3 ,
      imie: 'Ewa',
      nazwisko: 'Nowak',
      dataUr: '2010-05-06',
      zdjecie: 'ewa.jpg',
      plec: Plec.K,
      waga: 55,
      wzrost: 165
    },
  {
    id:4,
    imie: 'Romek',
    nazwisko: 'Kowalski',
    dataUr: '2009-06-07',
    zdjecie: 'romek.jpg',
    plec: Plec.M,
    waga: 70,
    wzrost: 180
  }]
}
