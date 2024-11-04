import {TeamAbreviationType} from "./TeamData.ts";

export interface IGameData {
    index: number,
    name: string,
    location: string,
    startDate: string,
    away: TeamAbreviationType,
    home: TeamAbreviationType,
}

export const SCORE_WEIGHTS = {
    "base_game_score" : 10,
    "home_bonus": {"SF": 25, "CHC": 25, "MIL": 13, "OAK": 10, "LAA": 10, "COL": 6, "ARI": 6},
    "away_bonus": {"SF": 15, "CHC": 15, "SD" : 5},
    "night_game_penalty": -15,
    "split_squad_penalty": -15,
    "not_a_weekend_penalty": 0,
    "game_weights": [0.4, 0.3, 0.2],
}