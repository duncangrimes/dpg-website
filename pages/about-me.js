import {Typography} from "@mui/material";
import PageContent from "../components/PageContent";
import BigPaper from "../components/BigPaper";


export default function AboutMePage() {
    return (<PageContent title='About Me'>
       <BigPaper title="About Me" color={'primary.light'} width={'80%'}>
           <Typography className="aboutMeText"  sx={{color:'primary.dark'}}>
               I am a driven problem solver fascinated by technology.
               I am currently a junior at Vanderbilt University, working toward double majors in
               Applied Mathematics and Computer Science along with a minor in Business.
                <br/><br/>
               Although my strongest skill sets lie in STEM fields, I have thrived with Vanderbilt’s College of Arts and Science as my home school. Engaging in classes that require significant written and verbal skills has enhanced my ability to communicate complex programming concepts in a team setting.
               <br/><br/>
               Since arriving at Vanderbilt, I have immersed myself in many different communities and used my skills to contribute to these groups meaningfully. Immediately after arriving on campus, I joined Vanderbilt’s Men’s Club Volleyball team as an outside hitter. Last year we won a national title and I have assumed the role as President of the team.
               <br/><br/>
               As a sophomore I began using my programming knowledge to teach a weekly introductory Python course to students at Rose Park middle school. Shortly thereafter, I signed on as a Control Systems Engineer for the Vanderbilt Fusion Project. I am currently working with this group to become a part of the first entirely undergraduate team to successfully build a nuclear fusion reactor.
               <br/><br/>
               Last summer I worked as Software Engineer Intern for Connexity in Santa Monica, CA. I primarily focused on creating APIs and backend services for shopyourlikes.com, gaining significant experience using SQL for data management and Java Spring Boot to build applications. I also had the opportunity to design a frontend proof-of-concept Node.js app for ShopYourLikes “Storefronts,” a new homepage for users, and had the privilege to present this work to a team of 50 Connexity engineers.
               <br/><br/>
               I am seeking a software engineering internship position for Summer 2024. I would love to work on a team with a highly collaborative culture and an environment where I can continue to develop new skills.
               <br/><br/>
               Thanks for taking the time to read about me!
               <br/><br/>
               - Duncan Paul Grimes

           </Typography>
       </BigPaper>
        </PageContent>
    );

}