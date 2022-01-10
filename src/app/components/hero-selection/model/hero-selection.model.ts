import { iPlayer } from './../../game/interfaces/player.interface';

export class HeroSelectionModel {
    static newPlayer(hero, playerId: string): iPlayer {
        const player: iPlayer = {
            player_id: playerId,
            hero_name: hero.name,
            hero_image: hero.urlImage,
            scoreboard: 0
        }
        return player;
    }
}