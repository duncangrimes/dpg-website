import PageContent from "../components/PageContent";
import BigPaper from "../components/BigPaper";
import '@fontsource/onest'

export default function ResumePage() {

    return <PageContent height={{xs: '600px', sm: '140vh'}} title={"Resume"}>
        <BigPaper height={'120vh'}>
            <iframe
                src="resume.pdf"
                title="Resume"
                width="80%"
                height="100%"
                style={{border: "none"}}
                loading='lazy'>
            </iframe>
        </BigPaper>
    </PageContent>;
}