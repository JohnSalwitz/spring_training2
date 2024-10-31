import {useMemo, useState} from "react";

import {Calendar, Event, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'

import Box from "@mui/material/Box";

import Day from "../Components/Day.tsx";

import {getDaysInMonth} from "../model/utilities.ts";
import GameDay from "../model/GameDay.ts";

import {schedule} from "../data/schedule_2025.ts";

const localizer = momentLocalizer(moment)

// https://jquense.github.io/react-big-calendar/examples/index.html?path=/story/about-big-calendar--page

// TODO -- use selected event to pick day (use event to score)
export default function MyCalendar() {

    const YEAR = 2025;
    const MONTH = 1;
    const MONTH_COUNT = 2;

    const START_DATE = new Date(YEAR, MONTH, 1, 12,0,0);

    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const events : Event[] = useMemo(() => {
        const _events : Event[] = [];
        for(let j = 0; j < MONTH_COUNT; j++) {
            for(let i = 1; i <= getDaysInMonth(YEAR, MONTH+j); i++) {
                const _date = new Date(YEAR, MONTH+j, i, 13,0,0);
                const _gameDay = new GameDay(schedule, _date);
                if(_gameDay.score > 0) {
                    _events.push(_gameDay.toEvent());
                }
            }
        }

        return _events;
    }, []);

    const _handleSelectEvent = (event: Event) => {
        setSelectedDate(event.start!)
    }

    return (
        <Box sx={{
            display: "inline-flex",
            flexDirection: 'row',
            justifyContent: "space-around",
            width: 0.9,
            height: 0.9,
            p: 1}}>
            <Box sx={{width: 0.7}}>
                <Calendar
                    defaultDate = {START_DATE}
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    views={["month"]}
                    onSelectEvent={_handleSelectEvent}
                    selectable
                />
            </Box>
            <Box sx={{width: 0.25}}>
                <Day date={selectedDate} schedule={schedule}/>
            </Box>
        </Box>
    )
}

//                     toolbar={false}