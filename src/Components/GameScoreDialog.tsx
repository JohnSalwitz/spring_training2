import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import GameScoreDetails from './GameScoreDetails.tsx';
import {useEffect} from "react"; // Import your GameScoreDetails component

import Game from "../model/Game.ts"

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
            <Dialog sx={{width: "100%"}} open={open} onClose={props.onClose}>
                <DialogTitle>{props.game.longName}</DialogTitle>
                <DialogContent>
                    <GameScoreDetails {...props}/>
                </DialogContent>
            </Dialog>

        );
    }

    return <></>;

}