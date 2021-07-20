import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageComponent } from './message/message.component';
import {BackgroudColorInputDirective} from './backgroud-color-input.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MessageComponent,
    BackgroudColorInputDirective
  ],
  exports: [
    MessageComponent,
    BackgroudColorInputDirective
  ]
})
export class SharedModule { }
