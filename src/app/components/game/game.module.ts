import { CongratulationsModule } from './../congratulations/congratulations.module';
import { HeroesSelectedModule } from './../heroes-selected/heroes-selected.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';


@NgModule({
  declarations: [
    GameComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,

    HeroesSelectedModule,
    CongratulationsModule
  ],
  exports: [
    GameComponent
  ]
})
export class GameModule { }
