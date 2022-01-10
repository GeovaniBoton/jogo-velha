import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/hero-selection/hero-selection.module').then(modulo => modulo.HeroSelectionModule)
  },
  {
    path: 'game',
    loadChildren: () => import('./components/game/game.module').then(modulo => modulo.GameModule)
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
