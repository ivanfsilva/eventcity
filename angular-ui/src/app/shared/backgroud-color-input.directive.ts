import {Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appBackgroudColorInput]'
})
export class BackgroudColorInputDirective {

  @Input() cor = 'gray';

  @HostBinding('style.backgroundColor') corDeFundoInput: string;

  constructor() { }

  @HostListener('focus') aoGanharFoco() {
    this.corDeFundoInput = this.cor;
  }

  @HostListener('blur') aoPerderFoco() {
    this.corDeFundoInput = 'transparent';
  }

}
