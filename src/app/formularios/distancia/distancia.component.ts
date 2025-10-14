//Formularios Reactivos es lo que esttamos viendo
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Distancia } from './calculo';

@Component({
  selector: 'app-distancia',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './distancia.component.html',
  styleUrls: ['./distancia.component.css']
})
export class DistanciaComponent {
  formulario!: FormGroup;
  resultado?: number;
  objDistancia = new Distancia();

  constructor() {
    this.formulario = new FormGroup({
      X1: new FormControl(null),
      Y1: new FormControl(null),
      X2: new FormControl(null),
      Y2: new FormControl(null)
    });
  }

  calcular(): void {
    const { X1, Y1, X2, Y2 } = this.formulario.value;

    this.objDistancia.X1 = Number(X1);
    this.objDistancia.Y1 = Number(Y1);
    this.objDistancia.X2 = Number(X2);
    this.objDistancia.Y2 = Number(Y2);

    this.objDistancia.calcularDistancia();
    this.resultado = this.objDistancia.resultado;
  }
}
