import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appBackgroudColorInput]'
})
export class BackgroudColorInputDirective {

  @HostBinding('style.backgroundColor') corDeFundoInput: string;

  constructor() { }

  @HostListener('focus') aoGanharFoco() {
    this.corDeFundoInput = 'yellow';
  }

  @HostListener('blur') aoPerderFoco() {
    this.corDeFundoInput = 'transparent';
  }

}
