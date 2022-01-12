import { HeroSelectionModel } from './model/hero-selection.model';
import { iPlayer } from './../game/interfaces/player.interface';
import { MarvelService } from './../../core/marvel.service';
import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

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

  protected ngUnsubscribe: Subject<void> = new Subject<void>();

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
    this.ngUnsubscribe.next();

    this.subscriptionList.push(
      this.marvelService.getAllHeroes(name).pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
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

  getHeroByName(clearName: boolean = false){
    if(clearName)
      this.heroName = '';
    console.log('hero name', this.heroName)
   
    if(this.heroName.length > 2 || this.heroName == '')
      this.getHeroesList(this.heroName)
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

}
