import { Button, Col, Divider, Row, Space } from "antd";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography";
import Paragraph from "antd/lib/typography/Paragraph";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function ExperienceSection() {
    return (
        <Row align={"middle"} justify={"center"}>
            <Col span={16} offset={3}>
                <Title level={2} style={{ color: "white", marginTop: "30px", fontWeight: 300 }}>
                    Relevant Work
                    Experience
                </Title>

                <Divider style={{ background: "white", marginTop: "40px"}} />
                <Row align={"top"}>
                    <Col span={12}>
                        <Title level={4} style={{ color: "white", textAlign: "left", marginBottom: 0, fontWeight: 350 }}>
                            PickEasy Inc.
                            (Toronto)
                        </Title>
                        <Title
                            level={5}
                            style={{
                                color: "#c6c5b9ff",
                                textAlign: "left",
                                marginBottom: 0,
                                marginTop: 0,
                                fontWeight: 400
                            }}
                        >
                            Software Engineer (Intern)
                        </Title>
                    </Col>
                    <Col span={12}>
                        <Title level={5} style={{ color: "#c6c5b9ff", textAlign: "right", marginBottom: 0, fontWeight: 400 }}>
                            May 2021 -- Aug 2021 (4 months)
                        </Title>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Text style={{ color: "#e0ca3cff", textAlign: "left" }}>
                            Javascript · React-native · Python · Flask · Mongodb · Elastic · Angular
                        </Text>
                        {/*<Divider style={{marginTop: "2px", marginBottom: 0, background: "#c6c5b9ff"}}/>*/}
                        <Paragraph style={{ color: "#fdfdffff", textAlign: "left", marginBottom: 0, marginLeft: 5 }}>
                            ▪ Implemented enhancements in SQL queries to reduce user wait time on home page by over 50%
                            <br />
                            • Polished and implemented new features for a restaurant service, resulting in 800% increase in organic growth of restaurants using the service
                            <br />
                            • Developed and released a gratitude journal app from scratch to supply some passive income to the company
                            <br />
                            • Experimented with new technologies by creating mini projects to investigate feasibility of new features
                        </Paragraph>
                    </Col>
                </Row>
                <Divider style={{ background: "white", marginTop: "20px"}} />
                <Row align={"top"}>
                    <Col span={12}>
                        <Title level={4} style={{ color: "white", textAlign: "left", marginBottom: 0, fontWeight: 350 }}>Shipenvoy
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
                            style={{ color: "#c6c5b9ff", textAlign: "right", marginBottom: 0, fontWeight: 400 }}>Nov
                            2020 -- Jan 2021 (3 months)</Title>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Text style={{ color: "#e0ca3cff", textAlign: "left" }}>
                            React.js · Parse
                        </Text>
                        {/*<Divider style={{marginTop: "2px", marginBottom: 0, background: "#c6c5b9ff"}}/>*/}
                        <Paragraph style={{ color: "#fdfdffff", textAlign: "left", marginBottom: 0, marginLeft: 5 }}>
                            ▪ Built a full-stack platform from scratch in two months using mainly React.js and Parse
                            <br />
                            ▪ Added a tracking system for packages, administrative tools for warehouse workers (batch
                            operations, csv imports/exports, package queries and CRUD), and user support system
                            <br />
                            ▪ Automated deployments with Github CI/CD to deploy quick fixes and adjustments at request of client
                        </Paragraph>
                    </Col>
                </Row>
                <Divider style={{ background: "white", marginTop: "20px" }} />
                <Row align={"top"}>
                    <Col span={12}>
                        <Title level={4} style={{ color: "white", textAlign: "left", marginBottom: 0, fontWeight: 350 }}>University
                            of Toronto Information & Instructional Technology Services (Toronto)</Title>
                        <Title level={5} style={{
                            color: "#c6c5b9ff",
                            textAlign: "left",
                            marginBottom: 0,
                            marginTop: 0,
                            fontWeight: 400
                        }}>Software Developer (Intern)</Title>
                    </Col>
                    <Col span={12}>
                        <Title level={5}
                            style={{ color: "#c6c5b9ff", textAlign: "right", marginBottom: 0, fontWeight: 400 }}>Sep
                            2019 -- Apr 2020 (8 months)</Title>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Text style={{ color: "#e0ca3cff", textAlign: "left" }}>
                            Java (Spring Boot) · MySQL · Thymeleaf · HTML/CSS · Javascript
                        </Text>
                        {/*<Divider style={{marginTop: "2px", marginBottom: 0, background: "#c6c5b9ff"}}/>*/}
                        <Paragraph style={{ color: "#fdfdffff", textAlign: "left", marginBottom: 0, marginLeft: 5 }}>
                            ▪ Coordinated the migration of a legacy student service system from PHP to Java Spring Boot in
                            order to build a more secure application
                            <br />
                            ▪ Authored MySQL migration scripts in order to mitigate inconsistencies among database and code
                            <br />
                            ▪ Escalated issues to address security concerns involving storing sensitive data
                            <br />
                            ▪ Reduced expected project duration by over 4 months by writing maintainable and modular
                            code
                        </Paragraph>
                    </Col>
                </Row>
                <Divider style={{ background: "white", marginTop: "20px" }} />
                <Button type={"primary"} size={"large"} style={{ marginBottom: "10px", marginTop: "10px" }}>
                    <Link to={"projects"} smooth={true} duration={700}>
                        <Space size={10}>
                            Projects <FontAwesomeIcon icon={faAngleDoubleDown} />
                        </Space>
                    </Link>
                </Button>
            </Col>
        </Row>
    );
}
