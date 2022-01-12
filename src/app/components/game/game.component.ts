import { iPlayer } from './interfaces/player.interface';
import { GameModel } from './model/game.model';
import { iGame } from './interfaces/game.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ePlayer } from './enums/player.enum';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  
  game: Array<iGame> = GameModel.newGame(); 

  players: Array<iPlayer> = [];

  playerWinner: iPlayer;

  currentPlayer: string = '';

  showGame: boolean = true;

  countPlays: number = 0;

  constructor(private router: Router) {
    this.listenSetPlayers();
   }

  ngOnInit(): void {
  }

  private listenSetPlayers(){
    if(!this.router.getCurrentNavigation().extras.queryParams)
      this.router.navigate(['/']);

    this.router.getCurrentNavigation().extras.queryParams.forEach(
      (player: iPlayer) => { this.players.push(player) }
    );

    this.setFirstPlayer();
  }


  setPlay(index: number, playerId: string) {
    if(this.game[index].value !== '')
      return false;

    this.game[index].value = playerId;  
    this.countPlays++;

    this.checkWinner(playerId);
  }

  private checkWinner(playerId: string) {
    let isWinner: boolean = false;

    isWinner = GameModel.checkWinner(this.game, playerId);

    if(!isWinner && this.countPlays === 9)
      this.setItOld();
    
    isWinner ? this.setWinner(playerId) : this.setNextPlayer();      
  }

  private setWinner(playerId: string) {
    let i: number = this.players.findIndex(player => player.player_id === playerId);

    this.players[i].scoreboard++;

    this.showGame = false;
    this.playerWinner = this.players[i]; 
  }

  private setItOld() {
    const player: iPlayer = {
      player_id: ePlayer.velha,
      hero_name: '',
      hero_image: '',
      scoreboard: 0
    }

    this.showGame = false;
    this.playerWinner = player;
  }

  private setNextPlayer() {
    this.currentPlayer === ePlayer.x ? this.currentPlayer = ePlayer.o : this.currentPlayer = ePlayer.x;
  }

  private setFirstPlayer(){
    this.currentPlayer = this.players[0].player_id;
  }

  newGame(isNewGame: boolean) {
    if(isNewGame){
      this.countPlays = 0;
      this.game = GameModel.newGame();
      this.showGame = true;
    }
  }
}
