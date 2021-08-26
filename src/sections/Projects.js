import {Button, Card, Carousel, Col, Row, Space} from "antd";
import Title from "antd/lib/typography/Title";
import shipenvoy from "../static/images/shipenvoy_1.png";
import Text from "antd/lib/typography";
import sportcred1 from "../static/images/sportcred_1.png";
import sportcred4 from "../static/images/sportcred_4.png";
import sportcred2 from "../static/images/sportcred_2.png";
import sportcred3 from "../static/images/sportcred_3.png";
import spo2fi1 from "../static/images/spo2fi_1.png";
import spo2fi2 from "../static/images/spo2fi_2.png";
import spo2fi3 from "../static/images/spo2fi_3.png";
import spo2fi4 from "../static/images/spo2fi_4.png";
import bubble1 from "../static/images/bubble_1.png";
import bubble2 from "../static/images/bubble_2.png";
import bubble3 from "../static/images/bubble_3.png";
import bubble4 from "../static/images/bubble_4.png";
import blog1 from "../static/images/blog_1.png";
import blog2 from "../static/images/blog_2.png";
import blog3 from "../static/images/blog_3.png";
import {Link} from "react-scroll";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleDown} from "@fortawesome/free-solid-svg-icons";
import React, {View} from "react";

export default function ProjectsSection() {
    const s = {objectFit: "fill", height: 400, overflow: "hidden"}
    return (
        <Row justify={"center"} align={"middle"}>
            <Col offset={3} span={16}>
                <Title level={2} style={{color: "white", marginTop: "30px", fontWeight: 300}}>My Projects</Title>

                <Row justify={"center"} gutter={[16, 16]}>
                    <Col xxl={8}>
                        <a href={"https://shipenvoy.ca"}>
                            <Card
                                type={"inner"}
                                hoverable
                                style={{width: 400, borderRadius: 10}}
                                cover={
                                    <Carousel autoplay style={{marginTop: 5}}>
                                        <img src={shipenvoy} alt={"missing"} style={{marginTop: 5}}/>
                                    </Carousel>
                                }
                            >
                                <Card.Meta
                                    title={
                                        <div>
                                            <Title level={3} style={{color: "#393d3fff"}}>
                                                Shipenvoy
                                            </Title>
                                            <Text style={{color: "#86867f"}}>
                                                React.js · Parse-platform
                                            </Text>
                                        </div>
                                    }
                                    description={
                                        "This is a platform I was paid to create for logistics company Shipenvoy. It " +
                                        "allows users to ship packages internationally, and administrators to track " +
                                        "inventory."
                                    }
                                />
                            </Card>
                        </a>
                    </Col>
                    <Col xxl={8}>
                        <a href={"https://github.com/iangu48/sportcred"}>
                            <Card
                                type={"inner"}
                                hoverable
                                style={{width: 400, borderRadius: 10}}
                                cover={
                                    <Carousel autoplay style={{marginTop: 5}}>
                                        <img src={sportcred1} alt={"missing"} style={s}/>
                                        <img src={sportcred4} alt={"missing"} style={s}/>
                                        <img src={sportcred2} alt={"missing"} style={s}/>
                                        <img src={sportcred3} alt={"missing"} style={s}/>
                                    </Carousel>
                                }
                            >
                                <Card.Meta
                                    title={
                                        <div>
                                            <Title level={3} style={{color: "#393d3fff"}}>
                                                Sportcred
                                            </Title>
                                            <Text style={{color: "#86867f"}}>
                                                React-native · Firebase
                                            </Text>
                                        </div>
                                    }
                                    description={
                                        "Minimum viable product mobile application developed for a client which " +
                                        "allows sports fans to show off their sports knowledge through trivia, " +
                                        "debates, pick’ems, and more."
                                    }
                                />
                            </Card>
                        </a>
                    </Col>
                    <Col xxl={8}>
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
                                                Python · Flask · Spotify Web API · Heroku
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
                    <Col xxl={8}>
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
                                                ExpressJs · Google Cloud Processing API · Heroku
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
                    <Col xxl={8}>
                        <a href={"https://blog.iangu.me"}>
                            <Card
                                type={"inner"}
                                hoverable
                                style={{width: 400, borderRadius: 10}}
                                cover={
                                    <Carousel autoplay style={{marginTop: 5}}>
                                        <img src={blog1} alt={"missing"}/>
                                        <img src={blog2} alt={"missing"}/>
                                        <img src={blog3} alt={"missing"}/>
                                    </Carousel>
                                }
                            >
                                <Card.Meta
                                    title={
                                        <div>
                                            <Title level={3} style={{color: "#393d3fff"}}>
                                                Blog
                                            </Title>
                                            <Text style={{color: "#86867f"}}>
                                                React.js · Firebase
                                            </Text>
                                        </div>
                                    }
                                    description={
                                        "This was a blog I built to share whatever I want. Take a look!"
                                    }
                                />
                            </Card>
                        </a>
                    </Col>
                </Row>

                <Button type={"primary"} size={"large"} style={{marginBottom: "10px", marginTop: "10px"}}>
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
