import PageContent from "../components/PageContent";
import BigPaper from "../components/BigPaper";

export default function ResumePage() {

    return <PageContent title={"Resume"}>
        <BigPaper height={'120vh'} width={'60%'} color={'primary.light'}>
            <iframe
                src="resume.pdf"
                title="Resume"
                width="100%"
                height="100%"
                style={{border: "none"}}
                loading='lazy'>
            </iframe>
        </BigPaper>
    </PageContent>;
}