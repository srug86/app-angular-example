import { Component } from '@angular/core';

@Component({
    selector: 'app-fechaactual',
    template: `
    <p>{{ ciudad | uppercase }}, {{ hoy | date: 'd/M/y' }} a las {{ hoy | date: 'H:m Z' }}</p>
    <app-copyright></app-copyright>
    <p>El resultado es {{ resultado | number: '3.2-2' }}</p>
    <p>La cotización actual del dólar es de {{ dolareuro | currency: 'EUR': true }}</p>
    <p>{{ sexo | i18nSelect: encabezamiento }} {{ nombre }}</p>
    <p>La cotización actual del dólar es de {{ dolareuro | euro }}</p>
    `,
    styleUrls: ['./fechaactual.component.css']
})

export class FechaactualComponent {
    hoy = new Date();

    ciudad: string = 'Madrid';

    resultado: number = 1.148;

    dolareuro: number = 0.88;

    nombre: string = 'Laura';
    sexo: string = 'mujer';
    encabezamiento: any = { 'hombre': 'Estimado', 'mujer': 'Estimada' };
}
