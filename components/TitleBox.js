import {Paper, Typography} from "@mui/material";
import '../styles/styles.css';

export default function TitleBox({title}){
    return (<Paper className="smallPaper" elevation={24} sx={{backgroundColor: 'primary.dark'}}>
        <Typography className='title' sx={{color:'secondary.main', fontFamily: 'onest'}}>
            {title}
        </Typography>
    </Paper>);
}