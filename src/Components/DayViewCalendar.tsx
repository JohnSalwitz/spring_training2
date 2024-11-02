import * as React from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import {TEAM_DATA_WEST, TeamAbreviationType, TeamDataType} from "../model/TeamData.ts";
import GameDay from "../model/GameDay.ts";
import {schedule, title} from "../data/schedule_2025.ts";

function TableCalendar() {

    const COL_WIDTH = 100
    const ROW_HEIGHT = 32

    const startDate = new Date(schedule[0].startDate);
    const endDate = new Date(schedule[schedule.length - 1].startDate);

    // Calculate the number of days between the start and end dates
    const daysDiff = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));

    // Create an array of days, starting from the startDate
    const days = Array.from({length: daysDiff + 1}, (_, index) =>
        new Date(startDate.getTime() + index * 24 * 60 * 60 * 1000)
    );

    // Function to format the day as a string (e.g., "Mon", "Tue")
    const formatDay = (day: Date) => {
        const options: Intl.DateTimeFormatOptions = {
            month: 'short',
            day: 'numeric',
            weekday: "short"
        };
        return day.toLocaleDateString(undefined, options);
    };

    const _colWidth = `${COL_WIDTH}px`;
    const _rowHeight = `${ROW_HEIGHT}px`;
    const _tableWidth = `${COL_WIDTH * days.length}px`;


    const _homeGameBox = (gameDay: GameDay, home: TeamAbreviationType): React.ReactElement => {
        const _game = gameDay.homeGame(home);
        if (_game && _game.score > 0) {
            return (<Box sx={{
                width: 0.95,
                height: 0.95,
                backgroundColor: _game.color,
            }}>{`${_game.away}(${_game.score})`}</Box>)
        }
        return <></>
    }

    let _oddEvenWeek = 0;

    return (
        <Paper elevation={3} sx={{display: "flex", flexDirection: "column", p: 1, width: '90vw', overflow: "hidden"}}>

            <Typography variant={"h4"}>{title}</Typography>

            <Box sx={{display: "flex", p: 1, width: '100%', height: '100%', overflow: "hidden"}}>

                {/* Home Team Names */}
                <Box sx={{width: _colWidth, height: "auto", border: 1}}>
                    <Box sx={{width: _colWidth, height: _rowHeight, border: 1}}>HOME</Box>
                    <Box sx={{height: "2px"}}></Box>
                    {TEAM_DATA_WEST.map((td: TeamDataType, index) =>
                        <Box sx={{width: _colWidth, height: _rowHeight, border: 1}} key={index}>{td[1]}</Box>
                    )}
                </Box>

                <Box sx={{flexGrow: 1, px: 1, height: "auto", overflow: "scroll"}}>
                    <Stack direction="row" sx={{width: _tableWidth, height: "auto", border: 1}}>{
                        days.map((day: Date, index) => {
                                const _gameDay = new GameDay(schedule, day);
                                if (day.getDay() === 0) {
                                    _oddEvenWeek = 1 - _oddEvenWeek;
                                }
                                return (
                                    <Box sx={{width: _colWidth}}>

                                        {/* Date */}
                                        <Box sx={{
                                            width: _colWidth,
                                            height: _rowHeight,
                                            border: 1,
                                            backgroundColor: _oddEvenWeek ? "LightGrey" : "LightBlue"
                                        }}
                                             key={index}>{formatDay(day)}
                                        </Box>

                                        <Box sx={{height: "2px"}}></Box>

                                        {/* Home Games */}
                                        {TEAM_DATA_WEST.map((td: TeamDataType, index2) =>
                                            <Box key={index2} sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                width: _colWidth,
                                                height: _rowHeight,
                                                border: 1,

                                            }}>
                                                {_homeGameBox(_gameDay, td[1])}
                                            </Box>
                                        )}
                                    </Box>
                                )
                            }
                        )}
                    </Stack>
                </Box>
            </Box>
        </Paper>
    )
}

export default TableCalendar;