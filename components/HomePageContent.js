import {Box} from "@mui/material";
import TitleBox from "./TitleBox";

export default function HomePageContent({title, children}){
    return (<Box sx={{height: {xs: 'auto', med: '80vh'}, display: 'flex', alignItems: 'center', justifyContent: 'start', flexDirection: 'column',
        paddingBottom: '10vh', width: '100%'}}>
        <TitleBox title={title}/>
        {children}
    </Box>);}
