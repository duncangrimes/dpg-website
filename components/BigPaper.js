import {Paper} from "@mui/material";

export default function BigPaper({height, width, color, children}) {
    return (
    <Paper className="bigPaper" elevation={10} sx={{backgroundColor: color, height: height, width: width}}>
            {children}
        </Paper>
    )
}