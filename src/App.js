import React, {useState} from 'react';
import './App.css';
import 'fontsource-roboto';
import aboutMeIan from "./static/images/DSC_0044.jpg";
import welcomeIan from "./static/images/DSC_0189.jpg"
import 'antd/dist/antd.css'
import {Link} from "react-scroll";
import {Avatar, Image, Card, Col, Layout, Typography, Button, Row, List, Space, Divider, BackTop, Carousel} from "antd";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography";
import Paragraph from "antd/lib/typography/Paragraph";
import {LinkedinFilled, GithubFilled} from "@ant-design/icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faTerminal, faAngleDoubleDown, faChevronUp, faEdit } from "@fortawesome/free-solid-svg-icons";
import Particles from 'react-particles-js';
import dartIcon from "./static/icons/dart.svg"
import herokuIcon from "./static/icons/heroku.svg"
import javaIcon from "./static/icons/java.svg"
import pythonIcon from "./static/icons/python.svg"
import gitIcon from "./static/icons/git.svg"
import mySqlIcon from "./static/icons/mysql.svg"
import htmlIcon from "./static/icons/html.svg"
import cssIcon from "./static/icons/css.svg"
import firebaseIcon from "./static/icons/firebase.svg";
import { Document, Page } from "react-pdf";
import { pdfjs } from 'react-pdf';
import resumeFile from "./static/files/resume.pdf"
import spo2fi1 from "./static/images/spo2fi_1.png"
import spo2fi2 from "./static/images/spo2fi_2.png"
import spo2fi3 from "./static/images/spo2fi_3.png"
import spo2fi4 from "./static/images/spo2fi_4.png"
import bubble1 from "./static/images/bubble_1.png"
import bubble2 from "./static/images/bubble_2.png"
import bubble3 from "./static/images/bubble_3.png"
import bubble4 from "./static/images/bubble_4.png"

const ParticleBg = () => (
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
               }} />
);

function App() {
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
            <SideNav/>
        </Layout>
    );
}


function SideNav() {

    function SideLink(props) {
        return <li className={"nav-item"}>
            <Link to={props.to} smooth={true} duration={400} activeClass={"activeNav"} spy={true} style={{color: "white"}}>
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

function HomeSection() {

    return (
        <Row className={"h100"} align={"middle"}>
            <Col align={"middle"} justify={"center"} span={24}>
                <div className={"circular--portrait"} style={{marginBottom: "30px"}}>
                    <img src={welcomeIan} alt={":("} />
                </div>
                <Space size={3}>
                    <Title level={1} style={{color: "white", fontWeight: "300"}}>
                        Hello, I'm&nbsp;
                    </Title>
                    <Title style={{color: "#e0ca3cff", fontWeight: "300"}}> Ian Gu</Title>
                    <Title level={1} style={{color: "white", fontWeight: "380"}}>.</Title>
                </Space>
                <br/>
                <Button type={"primary"} size={"large"} style={{marginBottom: "150px"}}>
                    <Link to={"about"} smooth={true} duration={700}>
                        <Space size={10}>
                            About Me <FontAwesomeIcon icon={faAngleDoubleDown}/>
                        </Space>
                    </Link>
                </Button>
                <Row justify={"center"} align={"middle"}>
                    <Col>
                        <Space direction={"horizontal"} align={"baseline"} size={15}>
                            <Button icon={<LinkedinFilled />} type={"primary"} href={"https://www.linkedin.com/in/iancgu/"} shape={"circle"}>
                            </Button>
                            <Button icon={<GithubFilled />} type={"primary"} href={"https://github.com/iangu48"} shape={"circle"}>
                            </Button>
                            <Paragraph copyable code>
                                <a href={"mailto:ian.gu@mail.utoronto.ca"} style={{color: "white"}}>
                                    ian.gu@mail.utoronto.ca
                                </a>
                            </Paragraph>

                        </Space>
                    </Col>
                </Row>
            </Col>

        </Row>

    );
}

function AboutSection() {

    const languages = [
        {
            avatar: <Avatar icon={<img src={javaIcon} alt={"error"} style={{padding: "10px"}}/> } size={50} style={{background: "white"}}/>,
            title: 'Java',
            description: 'Spring Boot'
        },
        {
            avatar: <Avatar icon={<img src={pythonIcon} alt={"error"} style={{padding: "10px"}}/> } size={50} style={{background: "white"}}/>,
            title: 'Python',
            description: 'Flask'
        },
        {
            avatar: <Avatar icon={<img src={dartIcon} alt={"error"} style={{padding: "10px"}}/> } size={50} style={{background: "white"}}/>,
            title: 'Dart',
            description: 'Flutter'
        },
        {
            avatar: <Avatar icon={<FontAwesomeIcon icon={faJs} size={"lg"} color={"#fcba03"} />} size={50} style={{background: "white"}}/>,
            title: 'Javascript',
            description: 'React, Express'
        },
        {
            avatar: <Avatar icon={<img src={htmlIcon} alt={"error"} style={{padding: "5px", objectFit: "scale-down"}}/> } size={50} style={{background: "white"}}/>,
            title: 'HTML',
            description: ''
        },
        {
            avatar: <Avatar icon={<img src={cssIcon} alt={"error"} style={{padding: "5px", objectFit: "scale-down"}}/> } size={50} style={{background: "white"}}/>,
            title: 'CSS',
            description: ''
        },

    ]
    const tools = [
        {
            avatar: <Avatar icon={<img src={mySqlIcon} alt={"error"} style={{objectFit: "scale-down"}}/> } size={50} style={{background: "white"}}/>,
            title: 'MySQL',
            description: ''
        },
        {
            avatar: <Avatar icon={<img src={gitIcon} alt={"error"} style={{padding: "8px"}}/> } size={50} style={{background: "white"}}/>,
            title: 'git',
            description: ''
        },
        {
            avatar: <Avatar icon={<FontAwesomeIcon icon={faTerminal} size={"md"}  color={"#393d3fff"} />} size={50} style={{background: "white"}}/>,
            title: 'shell/bash',
            description: ''
        },
        {
            avatar: <Avatar icon={<img src={herokuIcon} alt={"error"} style={{padding: "10px"}}/> } size={50} style={{background: "white"}}/>,
            title: 'Heroku',
            description: ''
        },
        {
            avatar: <Avatar icon={<img src={firebaseIcon} alt={"error"} style={{padding: "7px", objectFit: "scale-down"}}/> } size={50} style={{background: "white"}}/>,
            title: 'Firebase',
            description: 'Auth, Firestore, Storage'
        },
    ]

    return (
        <Row justify={"start"} align={"middle"} className={"h100"}>

            <Col span={8} offset={6}>
                <Card hoverable cover={<Image src={aboutMeIan} style={{marginTop: "-1px"}}/>} style={{maxWidth: 400}}>
                    <Typography style={{textAlign: "justify"}}>
                        I'm a full-time student and aspiring software engineer.
                        I'm always open to expanding my skill set and experiencing new things.
                        <br/>
                        <br/>
                        I've recently taken up photography and learned a lot shooting on my Nikon D5600 and editing on
                        Lightroom.
                        <br/>
                        <br/>
                        Before that, I got super interested in gardening and turned my backyard into a vegetable garden.
                        I grew cucumbers, tomatoes, pole beans, peppers, pumpkins, lettuce, spinach, ... the list goes
                        on and on.
                    {/*    todo*/}
                    </Typography>
                </Card>
            </Col>


            <Col span={8} offset={0}>
                <Title level={3} style={{color: "white", marginTop: "30px", fontWeight: 300}}>Education</Title>
                <Divider style={{background: "white", marginTop: 0, marginBottom: "5px"}}/>

                <Row align={"top"}>
                    <Col span={12}>
                        <Title level={4} style={{color: "white", textAlign: "left", marginBottom: 0, fontWeight: 350}}>University of Toronto</Title>
                        <Title level={5} style={{color: "#c6c5b9ff", textAlign: "left", marginBottom: 0, marginTop: 0, fontWeight: 400}}>Honours BSc</Title>
                    </Col>
                    <Col span={12}>
                        <Title level={5} style={{color: "#c6c5b9ff", textAlign: "right", marginBottom: 0, fontWeight: 400}}>2018 - 2022</Title>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Text  style={{color: "#e0ca3cff", textAlign: "left", marginBottom: 0}}>(Co-operative) Program in Computer Science - Software Engineering Stream</Text>
                    </Col>

                </Row>
                <Divider style={{background: "white", marginTop: "10px"}}/>



                <Title level={3} style={{color: "white", marginTop: "70px", fontWeight: 300}}>Skills</Title>
                <Divider style={{background: "white", marginTop: 0, marginBottom: "10px"}}/>
                <Row>
                    <Col span={12}>
                        <List size={"small"} dataSource={languages} renderItem={item => (
                            <List.Item style={{borderBottom: "none"}}>
                                <List.Item.Meta
                                    avatar={item.avatar}
                                    title={<Title level={5} style={{color: "white", textAlign: "left", marginBottom: 0, fontWeight: 400}}>{item.title}</Title>}
                                    description={<Paragraph style={{color: "#e0ca3cff", textAlign: "left", marginBottom: 0}}>{item.description}</Paragraph>}
                                />
                            </List.Item>
                        )}
                        />
                    </Col>
                    <Col span={12}>
                        <List size={"small"} dataSource={tools} renderItem={item => (
                            <List.Item style={{borderBottom: "none"}}>
                                <List.Item.Meta
                                    avatar={item.avatar}
                                    title={<Title level={5} style={{color: "white", textAlign: "left", marginBottom: 0, fontWeight: 400}}>{item.title}</Title>}
                                    description={<Paragraph style={{color: "#e0ca3cff", textAlign: "left", marginBottom: 0}}>{item.description}</Paragraph>}
                                />
                            </List.Item>
                        )}
                        />
                    </Col>
                </Row>
                <Divider style={{background: "white", marginTop: "10px"}}/>
                <Button type={"primary"} size={"large"} style={{marginBottom: "10px"}}>
                    <Link to={"experience"} smooth={true} duration={700}>
                        <Space size={10}>
                            Work Experience <FontAwesomeIcon icon={faAngleDoubleDown}/>
                        </Space>
                    </Link>
                </Button>
            </Col>
        </Row>
    );
}

function ExperienceSection() {
    return (
        <Row className={"h100"} align={"middle"} justify={"center"}>
            <Col span={16} offset={3}>
                <Title level={2} style={{color: "white", marginTop: "30px", fontWeight: 300}}>Relevant Work Experience</Title>

                <Divider style={{background: "white", marginTop: "40px", marginBottom: "5px"}}/>
                <Row align={"top"}>
                    <Col span={12}>
                        <Title level={4} style={{color: "white", textAlign: "left", marginBottom: 0, fontWeight: 350}}>Software Developer Intern</Title>
                        <Title level={5} style={{color: "#c6c5b9ff", textAlign: "left", marginBottom: 0, marginTop: 0, fontWeight: 400}}>UTSC IITS (Toronto)</Title>
                    </Col>
                    <Col span={12}>
                        <Title level={5} style={{color: "#c6c5b9ff", textAlign: "right", marginBottom: 0, fontWeight: 400}}>Sep 2019 - Apr 2020 (8 months)</Title>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Text style={{color: "#e0ca3cff", textAlign: "left"}}>
                            Java (Spring Boot) · MySQL · Thymeleaf · HTML/CSS · Javascript

                        </Text>
                        {/*<Divider style={{marginTop: "2px", marginBottom: 0, background: "#c6c5b9ff"}}/>*/}
                        <Paragraph style={{color: "#fdfdffff", textAlign: "left", marginBottom: 0}}>
                            • Co-lead the migration of a legacy student service system from PHP backend to a modern Java
                            Spring Boot version
                            <br/>
                            • Wrote migration scripts to rescheme database to fit different needs
                            <br/>
                            • Designed and refactored code to follow an MVC pattern with Spring Boot and Thymeleaf
                        </Paragraph>
                    </Col>
                </Row>
                <Divider style={{background: "white", marginTop: "10px"}}/>
                <Button type={"primary"} size={"large"} style={{marginBottom: "10px", marginTop: "150px"}}>
                    <Link to={"projects"} smooth={true} duration={700}>
                        <Space size={10}>
                            Projects <FontAwesomeIcon icon={faAngleDoubleDown}/>
                        </Space>
                    </Link>
                </Button>
            </Col>
        </Row>
    );
}

function ProjectsSection() {
    return (
        <Row className={"h100"} justify={"center"} align={"middle"}>
            <Col offset={3} span={16}>
                <Title level={2} style={{color: "white", marginTop: "30px", fontWeight: 300}}>My Projects</Title>

                <Row justify={"center"}>
                    <Col span={8}>
                        <a href={"https://spo2fi.herokuapp.com/"}>
                            <Card
                                type={"inner"}
                                hoverable
                                style={{width: 400, borderRadius: 10}}
                                cover={
                                    <Carousel autoplay style={{marginTop: 5}}>
                                        <img src={spo2fi1} alt={"missing"}/>
                                        <img src={spo2fi2} alt={"missing"}/>
                                        <img src={spo2fi3} alt={"missing"}/>
                                        <img src={spo2fi4} alt={"missing"}/>
                                    </Carousel>
                                }
                            >
                                <Card.Meta
                                    title={
                                        <div>
                                            <Title level={3} style={{color: "#393d3fff"}}>
                                                Spo2fi
                                            </Title>
                                            <Text style={{color: "#86867f"}}>
                                                Python · Flask · Jinja · Spotify Web API · Heroku
                                            </Text>
                                        </div>
                                    }
                                    description={
                                        "You ever get tired of passing the aux around your entire car? Well now " +
                                        "everybody can have the aux! Just create a party and everybody can queue " +
                                        "music from their own phones"
                                    }
                                />
                            </Card>
                        </a>
                    </Col>
                    <Col span={8}>
                        <a href={"https://iangu.me/bubble-frontend/"}>
                            <Card
                                type={"inner"}
                                hoverable
                                style={{width: 400, borderRadius: 10}}
                                cover={
                                    <Carousel autoplay style={{marginTop: 5}}>
                                        <img src={bubble1} alt={"missing"}/>
                                        <img src={bubble2} alt={"missing"}/>
                                        <img src={bubble3} alt={"missing"}/>
                                        <img src={bubble4} alt={"missing"}/>
                                    </Carousel>
                                }
                            >
                                <Card.Meta
                                    title={
                                        <div>
                                            <Title level={3} style={{color: "#393d3fff"}}>
                                                Bubble
                                            </Title>
                                            <Text style={{color: "#86867f"}}>
                                                Javascript · Express · Google Cloud API · Heroku
                                            </Text>
                                        </div>
                                    }
                                    description={
                                        "Originally starting as a project created during 36 hour hackathon, this " +
                                        "program finds live, trending topics of the world every 30 minutes, and " +
                                        "displays them in a nice wordcloud with the most popular keywords displayed " +
                                        "the largest."
                                    }
                                />
                            </Card>
                        </a>
                    </Col>

                    <Col span={8}>
                        <Title level={3} style={{color: "#fdfdffff", fontWeight: 300, marginTop: 200}}>
                            Coming soon..
                        </Title>
                    </Col>
                </Row>

                <Button type={"primary"} size={"large"} style={{marginBottom: "10px", marginTop: "150px"}}>
                    <Link to={"resume"} smooth={true} duration={700}>
                        <Space size={10}>
                            My Resume <FontAwesomeIcon icon={faAngleDoubleDown}/>
                        </Space>
                    </Link>
                </Button>
            </Col>
        </Row>
    );
}

function ResumeSection() {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    // eslint-disable-next-line no-unused-vars
    const [numPages, setNumPages] = useState(null);
    // eslint-disable-next-line no-unused-vars
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    return (
        <Row className={"h100"} justify={"center"} align={"middle"}>
            <Col offset={1}>
                <Title level={2} style={{color: "white", marginTop: "30px", fontWeight: 300}}>Resume</Title>
                <Button type={"primary"} size={"large"} style={{marginBottom: "10px", marginTop: "10px"}}>
                    <Link to={"blog"} smooth={true} duration={700}>
                        <Space size={10}>
                            Blog <FontAwesomeIcon icon={faAngleDoubleDown}/>
                        </Space>
                    </Link>
                </Button>
            </Col>
            <Col offset={1}>
                <Divider type={"vertical"} style={{background: "white", height: "85vh", marginRight: "0"}}/>
            </Col>
            <Col>
                <Divider type={"vertical"} style={{background: "white", height: "90vh"}}/>
            </Col>
            <Col offset={0}>
                <div style={{overflowY: "scroll", height: "95vh"}}>
                    <Document
                        renderMode={"svg"}
                        file={resumeFile}
                        onLoadSuccess={onDocumentLoadSuccess}
                        // onLoadError={console.error}
                    >
                        <Page pageNumber={pageNumber} width={800} renderAnnotationLayer={false}/>
                    </Document>
                </div>
            </Col>
            <Col>
                <Divider type={"vertical"} style={{background: "white", height: "90vh", marginRight: 0}}/>
            </Col>
            <Col>
                <Divider type={"vertical"} style={{background: "white", height: "85vh"}}/>
            </Col>
        </Row>
    );
}

function BlogSection() {
    return (
        <Row className={"h100"} justify={"center"} align={"middle"}>
            <Col offset={1}>
                <Title level={2} style={{color: "white", marginTop: "30px", marginBottom: 0, fontWeight: 300}}>Blog (prospective)</Title>

                <Space direction={"vertical"}>
                        <Space direction={"horizontal"} align={"baseline"}>
                            <FontAwesomeIcon icon={faEdit} color={"white"} style={{fontSize: 25}}/>
                            <Typography.Link href={"https://blog.iangu.me"} style={{fontWeight: 300, fontSize: 26}}>
                                https://blog.iangu.me
                            </Typography.Link>
                        </Space>

                    <br/>
                    <Title level={5} style={{color: "white", textAlign: "left", marginBottom: 100, fontWeight: 300}}>
                        This is where I plan to write about whatever I want, whenever I want.
                    </Title>

                    <Button type={"primary"} size={"large"} style={{marginBottom: "10px", marginTop: "10px"}}>
                        <Link to={"contact"} smooth={true} duration={700}>
                            <Space size={10}>
                                Contact me <FontAwesomeIcon icon={faAngleDoubleDown}/>
                            </Space>
                        </Link>
                    </Button>
                </Space>

            </Col>
        </Row>
    );
}

function ContactSection() {
    return (
        <Row className={"h100"} justify={"center"} align={"middle"}>
            <Col offset={1}>
                <Title level={2} style={{color: "white", marginTop: "30px", fontWeight: 300}}>Contact Me</Title>
                    <Space direction={"horizontal"} align={"baseline"} size={15}>
                        <Button icon={<LinkedinFilled />} type={"primary"} href={"https://www.linkedin.com/in/iancgu/"} shape={"circle"}>
                        </Button>
                        <Button icon={<GithubFilled />} type={"primary"} href={"https://github.com/iangu48"} shape={"circle"}>
                        </Button>
                        <Paragraph copyable code>
                            <a href={"mailto:ian.gu@mail.utoronto.ca"} style={{color: "white"}}>
                                ian.gu@mail.utoronto.ca
                            </a>
                        </Paragraph>

                    </Space>

            </Col>
        </Row>
    );
}

export default App;
