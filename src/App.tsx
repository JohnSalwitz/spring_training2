import './App.css'

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';


import DayViewCalendar from "./Components/DayViewCalendar.tsx";

export default function App() {

    return (
        <React.Fragment>
            <CssBaseline />
            <React.Fragment>
                <CssBaseline />
                <Container fixed sx ={{m: 0}}>
                    <DayViewCalendar/>
                </Container>
            </React.Fragment>

        </React.Fragment>
    )
}
