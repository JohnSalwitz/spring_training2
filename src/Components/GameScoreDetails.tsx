import * as React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


import Game from "../model/Game.ts";


interface IProps {
    game: Game | null,
}

export default function GameScoreDetails({game}: IProps) {

    const _scoreToStr = (scr: number) : React.ReactElement => {
        if(scr > 0) {
            return <Typography>
                {`+${scr}`}
            </Typography>
        }

        if(scr === 0) {
            return <Typography>
                {`${scr}`}
            </Typography>
        }

        return <Typography sx={{color: "red" }}>
            {scr.toString()}
        </Typography>

    }


    return (
        <Paper sx = {{width: '30vw'}} elevation={3}>
            <Box p={2}>
                <Box sx = {{display: 'flex', width: "100%", justifyContent: "space-between"}}>
                    <Typography variant="h6">
                        {game?.dateTime.toLocaleTimeString()}
                    </Typography>
                    <Typography variant="h6">
                        {game?.dateTime.toLocaleDateString()}
                    </Typography>
                </Box>

                <Typography variant="h6" mt={2}>
                    Score:
                </Typography>

                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Factor</TableCell>
                            <TableCell align="right">Points</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {game!.scoreItems().map((item) => (
                            <TableRow key={item[0]}>
                                <TableCell sx={{ borderBottom: "none" }} >{item[0]}</TableCell>
                                <TableCell sx={{ borderBottom: "none" }} align="right">{_scoreToStr(item[1])}</TableCell>
                             </TableRow>
                        ))}
                        <TableRow>
                            <TableCell sx={{ borderBottom: "none" }} align="right">TOTAL</TableCell>
                            <TableCell sx={{ borderBottom: "none" }} align="right">{_scoreToStr(game!.score)}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

            </Box>
        </Paper>
    );
};

