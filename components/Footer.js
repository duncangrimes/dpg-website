import {AppBar, Avatar, Box, Button, Container, Stack, SvgIcon, Toolbar, Typography} from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContactInfo from "./ContactInfo";

export default function Footer() {
    return <AppBar className="appBar" position="static" sx={{height: {xs:'30vh', md:'20vh'}, bottom: 0}}>
            <Toolbar sx={{justifyContent: 'center'}}>
                <Box sx={{display: 'flex', paddingTop: '2vh', flexDirection: {xs: 'column-reverse', md: 'row'},
                                justifyContent: {xs: 'flex-start', md: 'center'}, alignItems: {xs: 'center', md: 'flex-start'}}}>
                    <ContactInfo/>
                    <Stack direction="row" spacing="7vh">
                        <Button variant="text" color="inherit" startIcon={<LinkedInIcon style={{color: "#7290a1", fontSize: "4vh"}}/>}
                                href="https://www.linkedin.com/in/duncan-grimes-a84641230/" target="_blank" rel="noopener noreferrer">
                            <Typography className="buttonText" sx={{fontSize: {xs: 0, md: '3vh'}}}>LinkedIn</Typography>
                        </Button>
                        <Button variant="text"  startIcon={<GitHubIcon style={{color: "#7290a1", fontSize: "4vh"}}/>}
                                href="https://github.com/duncangrimes" target="_blank" rel="noopener noreferrer">
                            <Typography className="buttonText" sx={{fontSize: {xs: 0, md: '3vh'}}}>GitHub</Typography>
                        </Button>
                            <Button variant="text" startIcon ={
                                <Avatar style={{height: '5vh', width: '5vh'}} src ="fusion-logo.png"  alt="fusion-logo"/>}
                            href = "https://www.vanderbiltfusion.org/" target="_blank" rel="noopener noreferrer">
                                <Typography className="fusionButtonText" sx={{fontSize: {xs: 0, md: '3vh'}}}>Fusion Project</Typography>
                            </Button>
                    </Stack>
                </Box>
            </Toolbar>
        </AppBar>
}