import {Avatar, Button, Card, Col, Divider, Image, List, Row, Space, Typography} from "antd";
import javaIcon from "../static/icons/java.svg";
import cIcon from "../static/icons/c-programming.svg"
import pythonIcon from "../static/icons/python.svg";
import dartIcon from "../static/icons/dart.svg";
import springIcon from "../static/icons/spring.svg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faJs} from "@fortawesome/free-brands-svg-icons";
import htmlIcon from "../static/icons/html.svg";
import cssIcon from "../static/icons/css.svg";
import mySqlIcon from "../static/icons/mysql.svg";
import gitIcon from "../static/icons/git.svg";
import {faAngleDoubleDown, faTerminal} from "@fortawesome/free-solid-svg-icons";
import herokuIcon from "../static/icons/heroku.svg";
import firebaseIcon from "../static/icons/firebase.svg";
import aboutMeIan from "../static/images/DSC_0044.jpg";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography";
import Paragraph from "antd/lib/typography/Paragraph";
import {Link} from "react-scroll";
import React from "react";

export default function AboutSection() {

    const languages = [
        {
            avatar: <Avatar icon={<img src={javaIcon} alt={"error"} style={{padding: "10px"}}/>} size={50}
                            style={{background: "white"}}/>,
            title: 'Java',
            description: 'Spring Boot'
        },
        {
            avatar: <Avatar icon={<FontAwesomeIcon icon={faJs} size={"lg"} color={"#fcba03"}/>} size={50}
                            style={{background: "white"}}/>,
            title: 'Javascript',
            description: 'React, Express'
        },
        {
            avatar: <Avatar icon={<img src={pythonIcon} alt={"error"} style={{padding: "10px"}}/>} size={50}
                            style={{background: "white"}}/>,
            title: 'Python',
            description: 'Flask'
        },
        {
            avatar: <Avatar icon={<img src={cIcon} alt={"error"} style={{padding: "10px"}}/>} size={50}
                            style={{background: "white"}}/>,
            title: 'C',
        },
        {
            avatar: <Avatar icon={<img src={dartIcon} alt={"error"} style={{padding: "10px"}}/>} size={50}
                            style={{background: "white"}}/>,
            title: 'Dart',
            description: 'Flutter'
        },
        {
            avatar: <Avatar icon={<img src={htmlIcon} alt={"error"} style={{padding: "5px", objectFit: "scale-down"}}/>}
                            size={50} style={{background: "white"}}/>,
            title: 'HTML',
            description: ''
        },
        {
            avatar: <Avatar icon={<img src={cssIcon} alt={"error"} style={{padding: "5px", objectFit: "scale-down"}}/>}
                            size={50} style={{background: "white"}}/>,
            title: 'CSS',
            description: ''
        },

    ]
    const tools = [
        {
            avatar: <Avatar icon={<img src={mySqlIcon} alt={"error"} style={{objectFit: "scale-down"}}/>} size={50}
                            style={{background: "white"}}/>,
            title: 'MySQL',
            description: ''
        },
        {
            avatar: <Avatar icon={<img src={gitIcon} alt={"error"} style={{padding: "8px"}}/>} size={50}
                            style={{background: "white"}}/>,
            title: 'git',
            description: ''
        },
        {
            avatar: <Avatar icon={<FontAwesomeIcon icon={faTerminal} size={"md"} color={"#393d3fff"}/>} size={50}
                            style={{background: "white"}}/>,
            title: 'shell/bash',
            description: ''
        },
        {
            avatar: <Avatar icon={<img src={herokuIcon} alt={"error"} style={{padding: "10px"}}/>} size={50}
                            style={{background: "white"}}/>,
            title: 'Heroku',
            description: ''
        },
        {
            avatar: <Avatar
                icon={<img src={firebaseIcon} alt={"error"} style={{padding: "7px", objectFit: "scale-down"}}/>}
                size={50} style={{background: "white"}}/>,
            title: 'Firebase',
            description: 'Auth, Firestore, Storage'
        },
    ]

    return (
        <Row justify={"center"} align={"middle"}>

            <Col xxl={8} offset={3}>
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
            <Col xxl={8} offset={0}>
                <Title level={3} style={{color: "white", marginTop: "30px", fontWeight: 300}}>Education</Title>
                <Divider style={{background: "white", marginTop: 0, marginBottom: "5px"}}/>

                <Row align={"top"}>
                    <Col span={12}>
                        <Title level={4} style={{color: "white", textAlign: "left", marginBottom: 0, fontWeight: 350}}>University
                            of Toronto</Title>
                        <Title level={5} style={{
                            color: "#c6c5b9ff",
                            textAlign: "left",
                            marginBottom: 0,
                            marginTop: 0,
                            fontWeight: 400
                        }}>Honours BSc</Title>
                    </Col>
                    <Col span={12}>
                        <Title level={5}
                               style={{color: "#c6c5b9ff", textAlign: "right", marginBottom: 0, fontWeight: 400}}>2018 -
                            2022</Title>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Text style={{color: "#e0ca3cff", textAlign: "left", marginBottom: 0}}>(Co-operative) Program in
                            Computer Science - Software Engineering Stream</Text>
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
                                    title={<Title level={5} style={{
                                        color: "white",
                                        textAlign: "left",
                                        marginBottom: 0,
                                        fontWeight: 400
                                    }}>{item.title}</Title>}
                                    description={<Paragraph style={{
                                        color: "#e0ca3cff",
                                        textAlign: "left",
                                        marginBottom: 0
                                    }}>{item.description}</Paragraph>}
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
                                    title={<Title level={5} style={{
                                        color: "white",
                                        textAlign: "left",
                                        marginBottom: 0,
                                        fontWeight: 400
                                    }}>{item.title}</Title>}
                                    description={<Paragraph style={{
                                        color: "#e0ca3cff",
                                        textAlign: "left",
                                        marginBottom: 0
                                    }}>{item.description}</Paragraph>}
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
