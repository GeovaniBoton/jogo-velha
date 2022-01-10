import { HeroesSelectedComponent } from './heroes-selected.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    HeroesSelectedComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeroesSelectedComponent
  ]
})
export class HeroesSelectedModule { }
