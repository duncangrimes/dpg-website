import {Paper, Typography} from "@mui/material";
import TitleBox from "./TitleBox";

export default function BigPaper({height , children}) {
    return (
    <Paper className="bigPaper" elevation={10} sx={{backgroundColor: 'primary.light', height: height}}>
            {children}
        </Paper>
    )
}