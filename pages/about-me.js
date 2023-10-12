import {Box, Paper, Stack, Typography} from "@mui/material";
import '@fontsource/onest'
import PageContent from "../components/PageContent";
import BigPaper from "../components/BigPaper";


export default function AboutMePage() {
    return (<PageContent height="100%" title='About Me'>
       <BigPaper height="800px" title="About Me">
           <Typography className="text" sx={{color:'primary.dark', fontFamily: 'onest'}}>
               about me section
           </Typography>
       </BigPaper>
        </PageContent>
    );

}