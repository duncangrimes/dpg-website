import {Box, Container, Typography} from "@mui/material";
import BigPaper from "../components/BigPaper";
import PageContent from "../components/PageContent";

export default function HomePage() {
    return <PageContent height="70vh" title='Welcome to my Website'>
        <BigPaper width='60%' color={'primary.dark'}>
            <Typography className={'text'} sx={{color: 'primary.light', fontFamily: 'onest'}} >
                Hello, and thanks for stopping by my website! <br/>
                I am a junior at Vanderbilt University studying <br/>
            </Typography>
            <Box sx={{display: 'flex'}}>
                <Typography className={'text'} fontWeight={900} color={'#b52905'}>
                        Applied Mathematics
                </Typography>
                <Typography className={'text'} sx={{color: 'primary.light', marginLeft: '1vh', marginRight:'1vh'}}>{"and"}</Typography>
                <Typography className={'text'} fontWeight={900} color={'#b52905'}>
                    Computer Science.
                </Typography>
            </Box>
            <Typography className={'text'} sx={{color: 'primary.light'}}>
                Please enjoy exploring this site and learning a bit about me, my projects and passions.
            </Typography>
            <br/><br/>
            <Typography className={'text'} sx={{color: 'primary.main', alignSelf: 'start'}}>
                - Duncan Paul Grimes
            <
            /Typography>

        </BigPaper>
    </PageContent>
}