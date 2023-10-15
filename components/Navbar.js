import * as React from 'react';
import Image from 'next/image';
import {
    AppBar, Box, Button, Stack,
    Toolbar, Typography,
} from "@mui/material";

export default function Navbar() {
    return (
            <AppBar className = "appBar" position = 'static' sx={{justifyContent: 'center', alignItems: 'left', height: '10vh'}}>
                <Toolbar sx={{justifyContent: 'flex-start', alignItems: 'center'}}>
                    <Box>
                    <Stack direction="row" spacing={5} sx={{alignItems: 'center'}}>
                       <Button style={{marginTop: '1.5vh'}}href="/">
                           <div style={{ width: '10vh', height: '5vh', position: 'relative' }}>
                               <Image src="/dpg-logo.png" alt="Logo" layout="fill" objectFit="cover" />
                           </div>
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
