import {Box, Container, Typography} from "@mui/material";
import BigPaper from "../components/BigPaper";
import PageContent from "../components/PageContent";

export default function HomePage() {
    return <PageContent height="75vh" title='Welcome to my Website'>
        <BigPaper height="40vh">
            <Typography className={'text'} sx={{color: 'primary.dark', fontFamily: 'onest'}} >
                Hello, and thanks for stopping by my website! <br/>
                I am a junior at Vanderbilt University studying <br/>
            </Typography>
            <Box sx={{display: 'flex'}}>
            <Typography className={'text'} fontWeight={900} color={'#b52905'}>
                    Applied Mathematics

            </Typography>
            <Typography className={'text'} sx={{color: 'primary.dark', marginLeft: '8px', marginRight:'8px'}}>{"and"}</Typography>
            <Typography className={'text'} fontWeight={900} color={'#06589c'}>
                Computer Science.
            </Typography>
            </Box>
            <Typography className={'text'} sx={{color: 'primary.dark'}}>
                Please enjoy exploring this site and learning a bit about me, my projects and passions.
            </Typography>
            <br/><br/>
            <Typography className={'text'} sx={{color: 'primary.dark', alignSelf: 'start'}}>
                - Duncan Paul Grimes
            <
            /Typography>

        </BigPaper>
    </PageContent>
}