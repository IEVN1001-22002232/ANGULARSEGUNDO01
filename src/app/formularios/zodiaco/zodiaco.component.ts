import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Zodiaco } from './ZODIA';

@Component({
  selector: 'app-zodiaco',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './zodiaco.component.html',
  styleUrls: ['./zodiaco.component.css']
})
export class ZodiacoComponent {
  formulario!: FormGroup;
  persona = new Zodiaco();
  Resultadofinal = false;

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      paterno: new FormControl(''),
      Materno: new FormControl(''),
      dia: new FormControl(null),
      mes: new FormControl(null),
      anio: new FormControl(null),
      sexo: new FormControl('')
    });
  }

  imprimir(): void {
    const { nombre, paterno, Materno, dia, mes, anio, sexo } = this.formulario.value;

    this.persona.nombre = nombre;
    this.persona.paterno = paterno;
    this.persona.Materno = Materno;
    this.persona.dia = Number(dia);
    this.persona.mes = Number(mes);
    this.persona.anio = Number(anio);
    this.persona.sexo = sexo;

    if (!nombre || !paterno || !Materno || !dia || !mes || !anio || !sexo) {
      alert('TE FALTAN DATOS POR LLENAR.');
      return;
    }

    this.persona.calcularEDAD();
    this.persona.Animales();
    this.Resultadofinal = true;
  }
}
