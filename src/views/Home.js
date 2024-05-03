import Grid from "../components/Grid";
import { TextElement, Title } from "../components/TextComponent";
import content from "../content";
import Footer from "../components/Footer";
import Socials from "../components/Socials";
import Landing from "../LandingComponent";
import { SkillIcons } from "../components/SkillIcons";

const Contents = () => {
    return (
        <section className="h-screen bg-black">
            <div className="h-full2 relative items-end justify-items-end">
                <div className="relative flow flex-row items-end top-0 h-full w-full flex-wrap z-0" />
                <div className="relative flow flex-row items-end bg-black bottom-0 w-full">
                    <Title>About Me</Title>
                    <div className="relative w-full m-auto 1g:w-2/3">
                        <TextElement c="true">{content.about.short}</TextElement>
                    </div>

                    <Title>Projects</Title>
                    <div className="grid grid-cols-1 md:grid-cols-2 x1:grid-cols-3 relative px-2 my-2 md:px-20 w-full overflow-auto gap-2 md:gap-4">
                    {content.projects.map((project) => (
                        <Grid
                        key={project.title}
                        title={project.title}
                        path={project.path}
                        image={project.images ? project.images.cover : null}
                        span={project.span ? project.span : 1}
                        > {project.short}
                        </Grid>
                    ))}
                    </div>

                    <Title>Skills</Title>
                    <div className="grid grid-flow-col grid-rows-3 md:grid-rows-2 gap-2 relative w-full m-auto lg:w-2/3 justify-center">
                        <SkillIcons name="react" />
                        <SkillIcons name="js" />
                        <SkillIcons name="html" />
                        <SkillIcons name="css" />
                        <SkillIcons name="tailwind" />
                        <SkillIcons name="node" />
                        <SkillIcons name="git" />
                        <SkillIcons name="python" />
                        <SkillIcons name="postgresql" />
                    </div>

                    <Title>Contact</Title>
                    <div className="relative w-full m-auto lg:w-2/3">
                        <Socials />
                        </div>

                    <hr className="mx-auto self-center w-full border-2 mt-7"/>
                    <Footer />
                </div>
            </div>
        </section>
    )
}

const Home = () => {
    return (
        <>
        <Landing />
        <Contents />
        </>
    )
}

export default Home;