import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMenuitem]'
})
export class MenuitemDirective {

  @HostBinding('class.itemOrange')
  private mostrar: boolean = false;

  @HostListener('mouseover')
  private onOver() {
    this.mostrar = true;
  }

  @HostListener('mouseout')
  private onOut() {
    this.mostrar = false;
  }
}
