import {Typography} from "@mui/material";
import PageContent from "../components/PageContent";
import BigPaper from "../components/BigPaper";


export default function AboutMePage() {
    return (<PageContent height="80vh" title='About Me'>
       <BigPaper height="70vh" title="About Me" color={'primary.light'} width={'70vh'}>
           <Typography className="text" sx={{color:'primary.dark'}}>
               about me section
           </Typography>
       </BigPaper>
        </PageContent>
    );

}