import { iGame } from './../interfaces/game.interface';

export class GameModel {

    static newGame(): Array<iGame> {
        const newGame: Array<iGame> = []
        for(let i = 0; i < 9; i++){
            const game: iGame = { value: '' };

            newGame.push(game);
        }
        return newGame;
    }
}