import { Component, Input, SimpleChanges } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Game } from '../models/Game';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  @Input()
  gamesPerPage!: number

  games!: Game[]
  currentPage = 1
  currentIndex = 0

  // service cannot be instantiated like this
  // gameService! :GameService

  constructor( private gameService : GameService){}

  ngOnChanges(changes: SimpleChanges){
    console.info(changes)
    if(changes['gamesPerPage'].currentValue == null) this.gamesPerPage=10;
    else this.gamesPerPage = changes['gamesPerPage'].currentValue
    console.log("gamesPerPage>>>>>>", this.gamesPerPage, "currentPage>>>>>>", this.currentPage)
    const resp$ = this.gameService.getGames(this.gamesPerPage, this.currentIndex)
    const result = resp$.subscribe(data => {
      this.games = data['games'],
      console.info(this.games)}
      )
  }

  previous(){
    this.currentPage--
    this.currentIndex-=this.gamesPerPage
    if (this.currentPage<1) {
      this.currentPage=1
    }
    console.log("gamesPerPage>>>>>>", this.gamesPerPage, "currentPage>>>>>>", this.currentPage)
    const resp$ = this.gameService.getGames(this.gamesPerPage, this.currentIndex)
    const result = resp$.subscribe(data => {
      this.games = data['games'],
      console.info(this.games)}
      )
  }

  next(){
    this.currentPage++
    this.currentIndex+=this.gamesPerPage
    console.log("gamesPerPage>>>>>>", this.gamesPerPage, "currentPage>>>>>>", this.currentPage)
    const resp$ = this.gameService.getGames(this.gamesPerPage, this.currentIndex)
    const result = resp$.subscribe(data => {
      this.games = data['games'],
      console.info(this.games)}
      )
  }
}
