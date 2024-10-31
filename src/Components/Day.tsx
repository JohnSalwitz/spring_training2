
import {useMemo} from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import GameDay from "../model/GameDay.ts";
import Game from "../model/Game.ts";
import {IGameData} from "../model/IGameData.ts"



interface IProps {
    date: Date | null
    schedule: Array<IGameData>,
}
export default function Day({date, schedule} : IProps) {

    const gameDay : GameDay | undefined = useMemo(() => {
        if(date !== null) {
            return new GameDay(schedule, date);
        }
    }, [date, schedule]);


    const heading = useMemo(() => {
        if(date !== null) {
            return date.toLocaleDateString();
        }
        return "";
    }, [date]);


    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>{heading}</TableCell>
                        <TableCell align={"right"}>Score</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {gameDay && gameDay.games.map((game: Game, index: number) =>
                        <TableRow key={index} sx ={{backgroundColor: game.color}}>
                            <TableCell>{game.title}</TableCell>
                            <TableCell align={"right"}>{game.score}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}