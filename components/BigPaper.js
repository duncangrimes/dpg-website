import {Paper} from "@mui/material";

export default function BigPaper({height , children}) {
    return (
    <Paper className="bigPaper" elevation={10} sx={{backgroundColor: 'primary.light', height: height}}>
            {children}
        </Paper>
    )
}