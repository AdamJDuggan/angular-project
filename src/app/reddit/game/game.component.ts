import { Component, OnInit, Input } from '@angular/core';
import { Game } from './game.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Input() game: Game;

  constructor() { }

  // The reason we have a voteUp() and a voteDown() on both classes (the modle and the article component) 
//is because each function does a slightly different thing. The idea is that the voteUp() on the ArticleComponent relates
// to the component view, whereas the Article model voteUp() defines what mutations
// happen in the model.
voteUp(): boolean {
  this.game.voteUp();
  return false;
}

voteDown(): boolean {
  this.game.voteDown();
  return false;
}

  ngOnInit() {
  }

}
