import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ciclo } from './calcularCICLO';


@Component({
  selector: 'app-apor-b',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './apor-b.component.html',
  styleUrl: './apor-b.component.css'
})

export class AporBComponent {
  formulario!: FormGroup;
  resultado?: number;
  objDistancia = new Ciclo();

  constructor() {
    this.formulario = new FormGroup({
      A: new FormControl(null),
      B: new FormControl(null),
    });
  }

  calcular(): void {
    const { A, B } = this.formulario.value;

    this.objDistancia.A = Number(A) || 0;
    this.objDistancia.B = Number(B) || 0;

    if (this.objDistancia.A <= 0 || this.objDistancia.B <= 0) {
        this.objDistancia.RES = 0;
        this.objDistancia.cantidad = 'INGRESA VALORES VALIDOS';
        this.resultado = 0;
        return;
    }

    this.objDistancia.calcularSuma();
    this.resultado = this.objDistancia.RES;
  }
}
