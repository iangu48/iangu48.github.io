import React from 'react';
import './App.css';
import 'fontsource-roboto';
import 'antd/dist/antd.css'
import {Link} from "react-scroll";
import {Col, Layout, Button, Row, BackTop } from "antd";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import {faChevronUp} from "@fortawesome/free-solid-svg-icons";
import Particles from 'react-particles-js';
import {useMediaQuery} from 'react-responsive'
import ContactSection from "./sections/Contact";
import HomeSection from "./sections/Home";
import AboutSection from "./sections/About";
import ExperienceSection from "./sections/Experience";
import ProjectsSection from "./sections/Projects";
import ResumeSection from "./sections/Resume";
import BlogSection from "./sections/Blog";

function App() {
    const isTabletOrMobile = useMediaQuery({query: '(max-width: 1224px)'})

    return (
        <Layout style={{background: "transparent"}}>

            <section id="welcome" className="flex">
                <ParticleBg/>
                <HomeSection/>
            </section>
            <section id="about" className="flex ">
                <ParticleBg/>
                <AboutSection/>
            </section>
            <section id="experience" className="flex ">
                <ParticleBg/>
                <ExperienceSection/>
            </section>
            <section id="projects" className="flex ">
                <ParticleBg/>
                <ProjectsSection/>
            </section>
            <section id="resume" className="flex ">
                <ParticleBg/>
                <ResumeSection/>
            </section>
            <section id="blog" className="flex ">
                <ParticleBg/>
                <BlogSection/>
            </section>
            <section id="contact" className="flex ">
                <ParticleBg/>
                <ContactSection/>
            </section>


            <BackTop>
                <Button size={"large"} style={{marginBottom: "150px"}} shape={"circle"}>
                    <FontAwesomeIcon icon={faChevronUp}/>
                </Button>
            </BackTop>

            {/*must be last*/}
            {!isTabletOrMobile && <SideNav/>}
        </Layout>
    );
}


function SideNav() {

    function SideLink(props) {
        return <li className={"nav-item"}>
            <Link to={props.to} smooth={true} duration={400} activeClass={"activeNav"} spy={true}
                  style={{color: "white"}}>
                {props.content}
            </Link>
        </li>
    }

    return (
        <Row className={"sidenav"} align={"middle"} justify={"center"}>
            <Col>
                <div className={"nav-content sidenav"}>
                    <ul className={"nav-items"}>
                        <SideLink to={"welcome"} content={"Welcome"}/>
                        <SideLink to={"about"} content={"About Me"}/>
                        <SideLink to={"experience"} content={"Experience"}/>
                        <SideLink to={"projects"} content={"Projects"}/>
                        <SideLink to={"resume"} content={"Resume"}/>
                        <SideLink to={"blog"} content={"Blog"}/>
                        <SideLink to={"contact"} content={"Contact"}/>
                    </ul>

                </div>
            </Col>
        </Row>
    );
}

function ParticleBg() {
    return (
        <Particles className={"particles-js"}
                   params={{
                       "particles": {
                           "number": {
                               "value": 60,
                               "density": {
                                   "enable": true,
                                   "value_area": 1500
                               }
                           },
                           "line_linked": {
                               "enable": true,
                               "opacity": 0.2
                           },
                           "move": {
                               "direction": "right",
                               "speed": 0.20
                           },
                           "size": {
                               "value": 1
                           },
                           "opacity": {
                               "anim": {
                                   "enable": true,
                                   "speed": 1,
                                   "opacity_min": 0.05
                               }
                           }
                       },
                       "interactivity": {
                           "events": {
                               "onclick": {
                                   "enable": true,
                                   "mode": "push"
                               }
                           },
                           "modes": {
                               "push": {
                                   "particles_nb": 1
                               }
                           }
                       },
                       "retina_detect": true
                   }}/>
    );
}

export default App;
