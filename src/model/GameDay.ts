import Game from "./Game";
import {Event} from "react-big-calendar";
import {IGameData, SCORE_WEIGHTS} from "./IGameData.ts";
import {TeamAbreviationType} from "./TeamData.ts";

export default class GameDay {
    private _date: Date;
    private _schedule: Array<IGameData>;
    private _games: Array<Game>;

    constructor(seasonSchedule: Array<IGameData>, date: Date) {
        this._date = date;
        this._schedule = seasonSchedule.filter(
            (r: IGameData) => new Date(r.startDate).toDateString() === date.toDateString());
        this._games  = this._schedule.map((r: IGameData) => {
            const awaySplitSquad =
                this._schedule.filter((r2: IGameData) => [r2.away, r2.home].includes(r.away)).length > 1;
            const homeSplitSquad =
                this._schedule.filter((r2: IGameData) => [r2.away, r2.home].includes(r.home)).length > 1;
            return new Game(r, awaySplitSquad, homeSplitSquad);
        });
        this._games =  this._games.sort((a, b) => b.score-a.score);
    }

    get date() : Date {
        return this._date;
    }

    get isWeekend(): boolean {
        return this.date.getDay() === 0 || this.date.getDay() === 6;
    }



    /**
     * Returns sorted list of games on this day (sorted by score)
     */
    get games() : Array<Game> {
        return this._games;
    }

    get score() : number {
        let dayScores = this.games.map(g => g.score);

        // fill to 3
        dayScores = dayScores.fill(0, dayScores.length-1, 3-1);
        dayScores = dayScores.sort((a: number, b: number) => b-a);
        dayScores = dayScores.slice(0, 3);


        // sum of top 3 games (weighted)
        let score =  dayScores.reduce((a, b, inx) =>
            a + b * SCORE_WEIGHTS.game_weights[inx] , 0);


        // not a weekend penalty
        if (!this.isWeekend) {
            score += SCORE_WEIGHTS.not_a_weekend_penalty;
        }

        return Math.round(score);

    }
    homeGame(home: TeamAbreviationType) : Game | undefined {
        return this._games.find(g => g.home === home);
    }

    /**
     * Converts to "react-big-calendar' event
     */
    toEvent(): Event {
        return {
            allDay: true,
            title: `${this.score}`,
            start: this.date,
            end: this.date
        }
    }

    toString() : string {
        return `${this.date.toDateString()}\n ${this.games.map(g => g.toString()).join("\n")}`;
    }
}


