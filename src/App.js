import React from 'react';
import './App.css';
import 'fontsource-roboto';
import aboutMeIan from "./static/images/DSC_0044.jpg";
import welcomeIan from "./static/images/DSC_0189.jpg"
import 'antd/dist/antd.css'
import {Link} from "react-scroll";
import {Avatar, Image, Card, Col, Layout, Typography, Button, Row, List, Space, Divider} from "antd";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography";
import Paragraph from "antd/lib/typography/Paragraph";
import {LinkedinFilled, GithubFilled} from "@ant-design/icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'font-awesome/css/font-awesome.min.css';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import {faTerminal, faAngleDoubleDown} from "@fortawesome/free-solid-svg-icons";
import Particles from 'react-particles-js';
import dartIcon from "./static/icons/dart.svg"
import herokuIcon from "./static/icons/heroku.svg"
import awsIcon from "./static/icons/aws.svg"
import javaIcon from "./static/icons/java.svg"
import pythonIcon from "./static/icons/python.svg"
import gitIcon from "./static/icons/git.svg"
import mySqlIcon from "./static/icons/mysql.svg"
import htmlIcon from "./static/icons/html.svg"
import cssIcon from "./static/icons/css.svg"

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
        <Row className={"sidenav"} align={"middle"}>
            <div className={"nav-content"}>
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
            avatar: <Avatar icon={<img src={awsIcon} alt={"error"} style={{padding: "7px", objectFit: "scale-down"}}/> } size={50} style={{background: "white"}}/>,
            title: 'AWS (dipped my toes)',
            description: 'Launched a few EC2 instances'
        },
    ]

    return (
        <Row justify={"start"} align={"middle"} className={"h100"}>

            <Col span={8} offset={6}>
                <Card hoverable cover={<Image src={aboutMeIan} style={{marginTop: "-1px"}}/>} style={{maxWidth: 400}}>
                    <Typography>
                        I'm a full-time student and aspiring software engineer.
                        <br/>
                        I'm always open to expanding my skill set and experiencing new things.
                        <br/>
                        {/*todo*/}
                        All of the words in Lorem Ipsum have flirted with me - consciously or unconsciously. That's to be expected. We have so many things that we have to do better... and certainly ipsum is one of them. An ‘extremely credible source’ has called my office and told me that Barack Obama’s placeholder text is a fraud. You could see there was text coming out of her eyes, text coming out of her wherever. I was going to say something extremely rough to Lorem Ipsum, to its family, and I said to myself, "I can't do it. I just can't do it. It's inappropriate. It's not nice."
                        <br/>
                        Lorem Ipsum better hope that there are no "tapes" of our conversations before he starts leaking to the press! An ‘extremely credible source’ has called my office and told me that Barack Obama’s placeholder text is a fraud. It’s about making placeholder text great again. That’s what people want, they want placeholder text to be great again.
                        <br/>
                    </Typography>
                </Card>
            </Col>


            <Col span={8} offset={0}>
                <Title level={3} style={{color: "white", marginTop: "30px", fontWeight: 400}}>Education</Title>
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



                <Title level={3} style={{color: "white", marginTop: "70px", fontWeight: 400}}>Skills</Title>
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

            </Col>
        </Row>
    );
}

export default App;
