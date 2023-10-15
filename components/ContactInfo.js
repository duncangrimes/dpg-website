import {Box, Typography} from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export default function ContactInfo(){
    return <Box sx={{flexDirection: 'column', paddingRight: {xs: 0, md: '7vh'}, paddingTop: {xs: '2vh', md: '1vh'}}}>
        <Box sx={{display: 'flex'}} justifyContent={"flex-start"}>
            <EmailIcon sx={{color: 'primary.main', alignSelf: 'center', height: '3vh'}}/>
            <Typography className={'contactInfo'} sx={{fontSize: '2vh'}}>duncan.p.grimes@vanderbilt.edu</Typography>
        </Box>
        <Box sx={{display: 'flex'}} justifyContent={"flex-start"}>
            <LocalPhoneIcon sx={{color: 'primary.main', alignSelf: 'center', height: '3vh'}}/>
            <Typography className={'contactInfo'}>(310) 488-2359</Typography>
        </Box>
    </Box>
}