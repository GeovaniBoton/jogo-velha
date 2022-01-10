import { iPlayer } from './../game/interfaces/player.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-selected',
  templateUrl: './heroes-selected.component.html',
  styleUrls: ['./heroes-selected.component.css']
})
export class HeroesSelectedComponent implements OnInit {

  @Input() players: Array<iPlayer> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
