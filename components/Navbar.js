import * as React from 'react';
import {
    AppBar, Box, Button, Stack,
    Toolbar, Typography,
} from "@mui/material";
import {Image} from "@mui/icons-material";

export default function Navbar() {
    return (
            <AppBar className = "appBar" position = 'static' sx={{justifyContent: 'center', alignItems: 'left', height: '7vh'}}>
                <Toolbar sx={{justifyContent: 'flex-start', alignItems: 'center'}}>
                    <Box>
                    <Stack direction="row" spacing={5} sx={{alignItems: 'center'}}>
                       <Button style={{marginTop: 8}}href="/">
                           <img src ="dpg-logo.png" alt= "fusion-logo" height={'30vh'} style={{paddingBottom: '.5vh'}}/>
                       </Button>
                          <Button className="buttonText" href="/about-me">
                              <Typography className="topButtonText">About</Typography>
                        </Button>
                        <Button className="buttonText" href="/resume">
                            <Typography className="topButtonText">Resume</Typography>
                        </Button>
                    </Stack>
                    </Box>
                </Toolbar>
            </AppBar>
    );
}
