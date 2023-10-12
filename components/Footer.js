import {AppBar, Box, Button, Container, Stack, SvgIcon, Toolbar, Typography} from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import * as React from "react";

export default function Footer() {
    return <AppBar className="appBar" position="static" sx={{height: '12vh',bottom: 0}}>
            <Toolbar sx={{justifyContent: 'center'}}>
                <Stack sx={{padding: '1vh'}} direction="row" spacing="7vh">
                    <Button variant="text" color="inherit" startIcon={<LinkedInIcon style={{color: "#7290a1", fontSize: "32px"}}/>}
                            href="https://www.linkedin.com/in/duncan-grimes-a84641230/">
                        <Typography className="buttonText">LinkedIn</Typography>
                    </Button>
                    <Button variant="text" startIcon = {<GitHubIcon style={{color: "#7290a1", fontSize: "32px"}}/>}
                            href="https://github.com/duncangrimes">
                        <Typography className="buttonText">GitHub</Typography>
                    </Button>
                        <Button variant="text" startIcon ={<img style={{paddingTop: '5px'}} src ="fusion-logo.png"  alt="fusion-logo" width = '40px'/>}
                        href = "https://www.vanderbiltfusion.org/">
                            <Typography className="fusionButtonText" sx={{}}>Fusion Project</Typography>
                        </Button>
                </Stack>
            </Toolbar>
        </AppBar>
}