import { expect, test, describe } from 'vitest'

import GameDay from "./GameDay";
//import {UNIT_TEST_SCHEDULE1} from "../data/UnitTestData";
import {schedule} from "../data/schedule_2025.ts";

describe('game day module', () => {

    test('converts a date', () => {
        const date = new Date("2024-02-22T13:10"+ "Z");
        expect(date.toDateString()).toBe("Thu Feb 22 2024")

        const d1 = new Date('March 5, 2024 13:00:00');
        const d2 = new Date("2024-03-05T13:10"+ "Z");
        expect(d1.toDateString()).toEqual(d2.toDateString())
    });

    test('gets the cumulative score for day', () => {
        const gameDay = new GameDay( schedule,  new Date('March 5, 2025 13:00:00'))
        expect(gameDay.score).toBe(14);
    });

    test('lists the game for the day', () => {
        const gameDay = new GameDay( schedule,  new Date('March 5, 2024 13:00:00'))
        expect(gameDay.toString()).toBe(_march_5_2024);
    });
});

const _march_5_2024 = "" +
    "KC at SF  => 35\n" +
    "CHC at COL  => 33\n" +
    "SEA at MIL  => 23\n" +
    "AZ at CLE  => 10\n" +
    "CWS at LAD  => 10\n" +
    "OAK at SD  => 10\n" +
    "CIN at LAA(ss)  => 7\n" +
    "LAA(ss) at TEX  => -3"