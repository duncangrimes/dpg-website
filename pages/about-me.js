import {Typography} from "@mui/material";
import PageContent from "../components/PageContent";
import BigPaper from "../components/BigPaper";


export default function AboutMePage() {
    return (<PageContent title='About Me'>
       <BigPaper title="About Me" color={'primary.light'} width={'70%'}>
           <Typography className="aboutMeText"  sx={{color:'primary.dark', display: 'inline-block'}}>
               I am a driven problem solver fascinated by technology.
               I am currently a junior at Vanderbilt University, working toward double majors in
               <span className={'importantText'}> Applied Mathematics</span> and <span className={'importantText'}>Computer Science</span> along with a minor in <span className={'importantText'}> Business</span>.
                <br/><br/>
               Although my strongest skill sets lie in STEM fields, I have thrived with Vanderbilt&apos;s College of Arts and Science as my home school. Engaging in classes that require significant written and verbal skills has enhanced my ability to communicate complex programming concepts in a team setting.
               <br/><br/>
               At Vanderbilt, I&apos;ve had the privilege to join several unique and talented groups, and I&apos;ve been able to use my skills to contribute meaningfully to these teams. Immediately after arriving on campus, I joined the Vanderbilt Men&apos;s Club Volleyball team as an outside hitter. Last year, we won an NCVF <span className={'importantText'}> national title </span> and I have assumed the role as <span className={'importantText'}> President of the team</span>.
               <br/><br/>
               As a sophomore, I began using my programming knowledge to <span className={'importantText'}> teach a weekly introductory Python course </span> to students at Rose Park middle school. Shortly thereafter, I signed on as a <span className={'importantText'}>Control Systems Engineer</span> for the Vanderbilt Fusion Project. I am currently working with this group to become a part of the first entirely undergraduate team to successfully build a <span className={'importantText'}> nuclear fusion reactor</span>.
               <br/><br/>
               Last summer I worked as <span className={'importantText'}>Software Engineer Intern</span> for Connexity in Santa Monica, CA. I primarily focused on creating APIs and backend services for shopyourlikes.com, gaining significant experience using SQL for data management and Java Spring Boot to build applications. I also used Node.js to design a frontend proof-of-concept for a new ShopYourLikes user homepage and had the opportunity to present this work to a team of 50 Connexity engineers.
               <br/><br/>
               I am currently  seeking a<span className={'importantText'}> software engineering internship position for Summer 2024</span>. I would love to work on a team with a highly collaborative culture in environment where I can continue to develop new skills.
               <br/><br/>
               Thanks for taking the time to read about me!
               <br/><br/>
               - Duncan Paul Grimes
           </Typography>
       </BigPaper>
        </PageContent>
    );

}
