import { HeroesSelectedModule } from './../heroes-selected/heroes-selected.module';
import { HeroSelectionComponent } from './hero-selection.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroSelecionRoutingModule } from './hero-selection-routing.module';



@NgModule({
  declarations: [
    HeroSelectionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeroSelecionRoutingModule,

    HeroesSelectedModule
  ],
  exports: [
    HeroSelectionComponent
  ]
})
export class HeroSelectionModule { }
