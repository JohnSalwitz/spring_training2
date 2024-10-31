
import {IGameData, SCORE_WEIGHTS} from "./IGameData.ts";

export default class Game {
    private _row: IGameData;
    private _awaySplit: boolean;
    private _homeSplit: boolean;

    constructor(row: IGameData, awaySplit: boolean, homeSplit: boolean,) {
        this._row = row;
        this._awaySplit = awaySplit;
        this._homeSplit = homeSplit;
    }

    get away(): string {
        return this._row.away;
    }

    get awaySS(): boolean {
        return this._awaySplit;
    }

    get home(): string {
        return this._row.home;
    }

    get homeSS(): boolean {
        return this._homeSplit;
    }

    get dateTime(): Date {
        return new Date(this._row.startDate + "Z");
    }

    get isNight() {
        return this.dateTime.getHours() > 16;
    }

    get score(): number {
        let score: number = SCORE_WEIGHTS.base_game_score;

        // visitor bonus
        if (this.away in SCORE_WEIGHTS.away_bonus) {
            score += (SCORE_WEIGHTS.away_bonus as { [key: string]: number })[this.away];
        }

        if (this.awaySS) {
            score += SCORE_WEIGHTS.split_squad_penalty;
        }

        // home bonus
        if (this.home in SCORE_WEIGHTS.home_bonus) {
            score += (SCORE_WEIGHTS.home_bonus as { [key: string]: number })[this.home];
        }

        if (this.homeSS) {
            score += SCORE_WEIGHTS.split_squad_penalty;
        }

        // nighttime penalty
        if (this.isNight) {
            score += SCORE_WEIGHTS.night_game_penalty;
        }

        return score;
    }

    get color(): string {
        const _heatColors : [number, string][] = [
            [30, "#f50509"],
            [20, "#ff6303"],
            [15, "#eff301"],
            [11, "#0efe06"],
            [-99, "#02fef7"],
        ]
        return _heatColors.find(c => c[0] <= this.score)![1]
    }

    get title() : string {
        const awaySS = this.awaySS ? "(ss)" : "";
        const homeSS = this.homeSS ? "(ss)" : "";
        return `${this.away}${awaySS} at ${this.home}${homeSS}`;
    }

    toString(): string {
        const awaySS = this.awaySS ? "(ss)" : "";
        const homeSS = this.homeSS ? "(ss)" : "";
        const night = this.isNight ? "(N)" : "";
        return `${this.away}${awaySS} at ${this.home}${homeSS} ${night} => ${this.score}`;
    }


}


