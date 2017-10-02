import { Component, OnInit } from '@angular/core';
import { Alumno } from '../modelos/alumno.model';

@Component({
  selector: 'app-ejarrayobjetos',
  templateUrl: './ejarrayobjetos.component.html',
  styleUrls: ['./ejarrayobjetos.component.css']
})
export class EjarrayobjetosComponent implements OnInit {

  public alumnos : Array<Alumno> = [
    { id: 1, nombre: 'Juan', apellidos: 'Gutiérrez', ciudad: 'Madrid'},
    { id: 2, nombre: 'Pedro', apellidos: 'López', ciudad: 'Sevilla'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
