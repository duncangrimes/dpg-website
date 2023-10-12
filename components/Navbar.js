
import * as React from 'react';
import '../styles/styles.css';
import {
    AppBar, Box, Button, Stack,
    Toolbar, Typography,
} from "@mui/material";
export default function Navbar() {
    return (
            <AppBar className = "appBar" position = 'static' sx={{justifyContent: 'left', alignItems: 'left'}}>
                <Toolbar sx={{justifyContent: 'left' }}>
                    <Box color="inherit">
                    <Stack direction="row" spacing={5}>
                       <Button style={{marginTop: 8}}href="/">
                           <img src ="dpg-logo.png" alt= "fusion-logo" width = '60'/>
                       </Button>
                          <Button className="buttonText" href="/about-me">
                              <Typography className="buttonText">About</Typography>
                        </Button>
                        <Button className="buttonText" href="/resume">
                            <Typography className="buttonText">Resume</Typography>
                        </Button>
                    </Stack>
                    </Box>
                </Toolbar>
            </AppBar>
    );
}
