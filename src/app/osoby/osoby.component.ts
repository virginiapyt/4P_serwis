import { Component } from '@angular/core';
import { Osoba } from '../osoba';
import { Plec } from '../osoba';
import { OsobyService } from '../osoby.service';
@Component({
  selector: 'app-osoby',
  standalone: true,
  imports: [],
  templateUrl: './osoby.component.html',
  styleUrl: './osoby.component.css'
})
export class OsobyComponent {
 
  ludzie:Osoba[]=[]

  constructor(private osoby:OsobyService){
    this.ludzie = osoby.getLudzie()
  }
}
