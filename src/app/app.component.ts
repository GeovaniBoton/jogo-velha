import { map } from 'rxjs/operators';
import { MarvelService } from './core/marvel.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jogo-velha';

  constructor(private marvelService: MarvelService) { }

  ngOnInit() {}
}
