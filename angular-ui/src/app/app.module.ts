import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { CitiesSearchComponent } from './cities-search/cities-search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BackgroudColorInputDirective } from './backgroud-color-input.directive';

@NgModule({
  declarations: [
    AppComponent,
    CitiesSearchComponent,
    NavbarComponent,
    BackgroudColorInputDirective
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
