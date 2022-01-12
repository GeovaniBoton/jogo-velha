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

    static checkWinner(game: Array<iGame>, playerId: string) {
        let isWinner: boolean = false

        //Horizontal
        if(game[0].value === playerId && game[1].value === playerId && game[2].value === playerId)
            isWinner = true;
        
        if(game[3].value === playerId && game[4].value === playerId && game[5].value === playerId)
            isWinner = true;

        if(game[6].value === playerId && game[7].value === playerId && game[8].value === playerId)
            isWinner = true;

        //Verticais
        if(game[0].value === playerId && game[3].value === playerId && game[6].value === playerId)
            isWinner = true;
        
        if(game[1].value === playerId && game[4].value === playerId && game[7].value === playerId)
            isWinner = true;

        if(game[2].value === playerId && game[5].value === playerId && game[8].value === playerId)
            isWinner = true;
        
        //Diagonais
        if(game[0].value === playerId && game[4].value === playerId && game[8].value === playerId)
            isWinner = true;
        
        if(game[2].value === playerId && game[4].value === playerId && game[6].value === playerId)
            isWinner = true;
  
        return  isWinner;
    }

}