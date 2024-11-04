import * as React from 'react';
import {useEffect} from "react"; // Import your GameScoreDetails component


import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";

import GameScoreDetails from './GameScoreDetails.tsx';

import Game from "../model/Game.ts"
import Typography from "@mui/material/Typography";

interface IProps {
    game: Game | null,
    onClose: () => void,
}

export default function GameScoreDialog(props: IProps) {
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        setOpen(props.game !== null);
    }, [props.game]);


    if(props.game) {
        return (
            <Dialog open={open} onClose={props.onClose}>
                <DialogTitle>
                    <Paper
                        elevation={3}
                        sx = {{
                        display: "flex",
                        justifyContent: "space-between",
                        p:1,
                        alignItems: "center",
                        width: "100%"}}
                    >
                        <Typography>
                            {props.game.longName}
                        </Typography>
                        {props.game.tickets && <Link href={props.game.tickets}>Tickets</Link>}
                    </Paper>
                </DialogTitle>
                <DialogContent>
                    <GameScoreDetails {...props}/>
                </DialogContent>
            </Dialog>

        );
    }

    return <></>;

}