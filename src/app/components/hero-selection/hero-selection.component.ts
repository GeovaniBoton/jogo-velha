import { iPlayer } from './../game/interfaces/player.interface';
import { MarvelService } from './../../core/marvel.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hero-selection',
  templateUrl: './hero-selection.component.html',
  styleUrls: ['./hero-selection.component.css']
})
export class HeroSelectionComponent implements OnInit {

  heroesList: Array<any> = [];
  players: Array<iPlayer> = [];
  heroName: string = '';

  private subscriptionList: Array<Subscription> = [];

  constructor(private marvelService: MarvelService) { }

  ngOnInit(): void {
    this.getHeroesList();
  }

  ngOnDestroy() {
    this.subscriptionList.forEach(subscription => {
      if(subscription) subscription.unsubscribe();
    });
  }

  private getHeroesList(name: string = ''){
    this.subscriptionList.push(
      this.marvelService.getAllHeroes(name).subscribe(
        data => {
          data.forEach(hero => {
            hero.urlImage = hero.thumbnail.path  + '.' + hero.thumbnail.extension;
          });
          this.heroesList = data;
        },
        err => { console.log(err) }
      )
    )
  }

  getHeroByName(name: string){
    this.getHeroesList(name)
  }

  selectHero(hero) {
    alert('Você selecionou o herói '+ hero.name)
  }

}
