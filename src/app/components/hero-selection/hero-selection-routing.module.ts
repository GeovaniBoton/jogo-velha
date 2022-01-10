import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroSelectionComponent } from './hero-selection.component';

const routes: Routes = [
    { path: '', component: HeroSelectionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroSelecionRoutingModule { }
