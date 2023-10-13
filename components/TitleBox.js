import {Paper, Typography} from "@mui/material";

export default function TitleBox({title}){
    return (<Paper className={'smallPaper'} elevation={24} sx={{backgroundColor: 'primary.dark'}}>
        <Typography className={'title'} sx={{color:'secondary.main'}}>
            {title}
        </Typography>
    </Paper>);
}