import {Button, Col, Divider, Row, Space} from "antd";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography";
import Paragraph from "antd/lib/typography/Paragraph";
import {Link} from "react-scroll";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleDown} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function ExperienceSection() {
    return (
        <Row className={"h100"} align={"middle"} justify={"center"}>
            <Col span={16} offset={3}>
                <Title level={2} style={{color: "white", marginTop: "30px", fontWeight: 300}}>Relevant Work
                    Experience</Title>

                <Divider style={{background: "white", marginTop: "40px", marginBottom: "5px"}}/>
                <Row align={"top"}>
                    <Col span={12}>
                        <Title level={4} style={{color: "white", textAlign: "left", marginBottom: 0, fontWeight: 350}}>Shipenvoy
                            (Toronto)</Title>
                        <Title level={5} style={{
                            color: "#c6c5b9ff",
                            textAlign: "left",
                            marginBottom: 0,
                            marginTop: 0,
                            fontWeight: 400
                        }}>Software Engineer (Contract / Freelance)</Title>
                    </Col>
                    <Col span={12}>
                        <Title level={5}
                               style={{color: "#c6c5b9ff", textAlign: "right", marginBottom: 0, fontWeight: 400}}>Nov
                            2020 -- Jan 2021 (3 months)</Title>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Text style={{color: "#e0ca3cff", textAlign: "left"}}>
                            React.js · Parse
                        </Text>
                        {/*<Divider style={{marginTop: "2px", marginBottom: 0, background: "#c6c5b9ff"}}/>*/}
                        <Paragraph style={{color: "#fdfdffff", textAlign: "left", marginBottom: 0, marginLeft: 5}}>
                            ▪ Built a full-stack platform from scratch in two months using mainly React.js and Parse
                            <br/>
                            ▪ Added a tracking system for packages, administrative tools for warehouse workers (batch
                            operations, csv imports/exports, package queries and CRUD), and user support system
                            <br/>
                            ▪ Used Github CI (continuous integration) to automate deployments on master merges
                        </Paragraph>
                    </Col>
                </Row>
                <Divider style={{background: "white", marginTop: "10px"}}/>
                <Row align={"top"}>
                    <Col span={12}>
                        <Title level={4} style={{color: "white", textAlign: "left", marginBottom: 0, fontWeight: 350}}>University
                            of Toronto Information & Instructional Technology Services (Toronto)</Title>
                        <Title level={5} style={{
                            color: "#c6c5b9ff",
                            textAlign: "left",
                            marginBottom: 0,
                            marginTop: 0,
                            fontWeight: 400
                        }}>Software Developer</Title>
                    </Col>
                    <Col span={12}>
                        <Title level={5}
                               style={{color: "#c6c5b9ff", textAlign: "right", marginBottom: 0, fontWeight: 400}}>Sep
                            2019 - Apr 2020 (8 months)</Title>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Text style={{color: "#e0ca3cff", textAlign: "left"}}>
                            Java (Spring Boot) · MySQL · Thymeleaf · HTML/CSS · Javascript
                        </Text>
                        {/*<Divider style={{marginTop: "2px", marginBottom: 0, background: "#c6c5b9ff"}}/>*/}
                        <Paragraph style={{color: "#fdfdffff", textAlign: "left", marginBottom: 0, marginLeft: 5}}>
                            ▪ Co-lead the migration of a legacy student service system from PHP to Java Spring Boot in
                            order to build a more secure application
                            <br/>
                            ▪ Wrote MySQL migration scripts in order to mitigate inconsistencies among database and code
                            <br/>
                            ▪ Escalated issues to address security concerns involving storing sensitive data
                            <br/>
                            ▪ Reduced expected project duration by over 4 months by writing maintainable and modular
                            code
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
