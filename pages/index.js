import {Box, Container, Typography} from "@mui/material";
import BigPaper from "../components/BigPaper";
import HomePageContent from "../components/HomePageContent";

export default function HomePage() {
    return <HomePageContent title='Welcome to my Website'>
        <BigPaper width='60%' color={'primary.dark'}>
            <Typography className={'text'} sx={{color: 'primary.light', fontFamily: 'onest', display: 'inline-block'}} >
                Hello, and thanks for stopping by my website! <br/>
                I am a junior at Vanderbilt University studying <br/>
                <span style={{color: '#b52905'}}> Applied Mathematics </span>
                and <span style={{color: '#b52905'}}>Computer Science</span>. <br/>

                Please enjoy exploring this site and learning a bit about me, my projects and passions.
            <br/><br/>
                - Duncan Paul Grimes
            <
            /Typography>

        </BigPaper>
    </HomePageContent>
}