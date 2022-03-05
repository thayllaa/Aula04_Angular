import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabuada',
  templateUrl: './tabuada.component.html',
  styleUrls: ['./tabuada.component.css']
})
export class TabuadaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mostrarTabuada() {
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var multiplo = 5;
  
    for (var i=1; i<11; i++) {
      document.write(multiplo + " x " + i + " = " + (multiplo*i) + "<br>");
    }
    }
}