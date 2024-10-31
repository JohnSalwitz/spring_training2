import Paper from '@mui/material/Paper';

import MyBigCalendar from "./BigCalendar.tsx";
export default function CalendarPage() {
    return (
        <Paper elevation={3} sx={{width:'90vw', height: "90vh"}}>
            <MyBigCalendar/>
        </Paper>

    );
}
