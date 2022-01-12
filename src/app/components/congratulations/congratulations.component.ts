import { ePlayer } from './../game/enums/player.enum';
import { iPlayer } from './../game/interfaces/player.interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-congratulations',
  templateUrl: './congratulations.component.html',
  styleUrls: ['./congratulations.component.css']
})
export class CongratulationsComponent implements OnInit {

  playerVelha: string = ePlayer.velha;

  @Input() playerWinner: iPlayer;
  @Output() isNewGame = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  refresh() {
    window.location.reload();
  }

  newGame() {
    this.isNewGame.emit(true);
  }
}
