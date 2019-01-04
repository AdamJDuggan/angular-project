import { Component, OnInit } from '@angular/core';
import { Game } from './game/game.model';


@Component({
  selector: 'app-reddit',
  templateUrl: './reddit.component.html',
  styleUrls: ['./reddit.component.css']
})
export class RedditComponent implements OnInit {

  games : Game[];

  constructor() {
    this.games = [
      new Game('Street Fighter Alpha III', 1),
      new Game('Metal Gear Solid', 3),
      new Game('Tomb Raider', 2),
    ]

   }

   addGame(title: HTMLInputElement): boolean {
     this.games.push(new Game(title.value, 0));
      title.value = '';
      //we return false to stop javascript from relaoding the page on the onlick event. Click events 
      return false;
   }

   sortedGames(): Game[] {
    return this.games.sort((a: Game, b: Game) => b.score - a.score);
  }

  ngOnInit() {
  }
  

}
