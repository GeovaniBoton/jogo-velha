import { HeroSelectionModel } from './model/hero-selection.model';
import { iPlayer } from './../game/interfaces/player.interface';
import { MarvelService } from './../../core/marvel.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-selection',
  templateUrl: './hero-selection.component.html',
  styleUrls: ['./hero-selection.component.css']
})
export class HeroSelectionComponent implements OnInit {
  
  currentPlayer: boolean =  Math.random() >= 0.5;

  heroesList: Array<any> = [];
  players: Array<iPlayer> = [];
  heroName: string = '';

  private subscriptionList: Array<Subscription> = [];

  constructor(private marvelService: MarvelService, private router: Router) { }

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

  private setPlayers(player: iPlayer) {
    if(this.players.length < 2)
      this.players.push(player);
  }

  getHeroByName(name: string){
    this.getHeroesList(name)
  }

  selectHero(hero) {
    let heroId: string = '';
    this.currentPlayer = !this.currentPlayer;
    
    this.currentPlayer ? heroId = 'X' : heroId = 'O';

    this.setPlayers(HeroSelectionModel.newPlayer(hero, heroId))
  }

  playGame() {
    this.router.navigate([`/game`],  { queryParams: this.players } ) ;
  }

  // teste(event) {
  //   this.heroName = event.target.value;
  //   console.log(event, this.heroName)
  // }

}
