import {Box, Container, Typography} from "@mui/material";
import BigPaper from "../components/BigPaper";
import HomePageContent from "../components/HomePageContent";

export default function HomePage() {
    return <HomePageContent title='Welcome'>
        <BigPaper width='60%' color={'primary.dark'}>
            <Typography className={'text'} sx={{color: 'primary.light', fontFamily: 'onest', display: 'inline-block'}} >
                Hello, and thanks for stopping by my website! <br/> <br/>

                I am a junior at Vanderbilt University studying <br/>
                <span style={{color: '#b52905', fontWeight: 900}}> Applied Mathematics </span>
                and <span style={{color: '#b52905', fontWeight: 900}}>Computer Science</span>. <br/> <br/>

                This site is deployed with <span className={'importantHomePageText'}>Vercel</span> and <span className={'importantHomePageText'}>Next.js</span> using
                components from <span className={'importantHomePageText'}>MaterialUI</span>, and its repository can be
                found on my <a className={'importantHomePageText'} href="https://github.com/duncangrimes/dpg-website"target="_blank" rel="noopener noreferrer"> GitHub</a>. <br/> <br/>

                Please enjoy exploring my website and learning a bit about me, my projects and passions.
            <br/><br/>
                - Duncan Paul Grimes
            </Typography>
        </BigPaper>
    </HomePageContent>
}