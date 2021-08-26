import { Button, Col, Row, Space } from "antd";
import welcomeIan from "../static/images/DSC_0189.jpg";
import Title from "antd/lib/typography/Title";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { GithubFilled, LinkedinFilled } from "@ant-design/icons";
import Paragraph from "antd/lib/typography/Paragraph";
import React from "react";
import { Grid } from "@material-ui/core";

export default function HomeSection() {

    return (
        <Grid container spacing={3} justify='center' alignItems='center' direction='column'>
            <Grid item xs={12}>
                <div className={"circular--portrait"} style={{ marginBottom: "30px", marginTop: "30px" }}>
                    <img src={welcomeIan} alt={"missing :("} />
                </div>
                <Space size={3}>
                    <Title level={1} style={{ color: "white", fontWeight: "300" }}>
                        Hello, I'm&nbsp;
                    </Title>
                    <Title style={{ color: "#e0ca3cff", fontWeight: "300" }}> Ian Gu</Title>
                    <Title level={1} style={{ color: "white", fontWeight: "380" }}>.</Title>
                </Space>
                <br />
                <Button type={"primary"} size={"large"} style={{ marginBottom: "150px" }}>
                    <Link to={"about"} smooth={true} duration={700}>
                        <Space size={10}>
                            About Me <FontAwesomeIcon icon={faAngleDoubleDown} />
                        </Space>
                    </Link>
                </Button>
                <Row justify={"center"} align={"middle"}>
                    <Col>
                        <Space direction={"horizontal"} align={"baseline"} size={15}>
                            <Button icon={<LinkedinFilled />} type={"primary"}
                                href={"https://www.linkedin.com/in/iancgu/"} shape={"circle"}>
                            </Button>
                            <Button icon={<GithubFilled />} type={"primary"} href={"https://github.com/iangu48"}
                                shape={"circle"}>
                            </Button>
                            <Paragraph copyable code>
                                <a href={"mailto:ian.gu@mail.utoronto.ca"} style={{ color: "white" }}>
                                    ian.gu@mail.utoronto.ca
                                </a>
                            </Paragraph>

                        </Space>
                    </Col>
                </Row>
            </Grid>
        </Grid>
    )

    return (
        <Row className={"h100"} align={"middle"} justify={"center"} xs={24}>
            <Col align={"middle"} justify={"center"} span={24} xs={24}>
                <div className={"circular--portrait"} style={{ marginBottom: "30px" }}>
                    <img src={welcomeIan} alt={":("} />
                </div>
                <Space size={3}>
                    <Title level={1} style={{ color: "white", fontWeight: "300" }}>
                        Hello, I'm&nbsp;
                    </Title>
                    <Title style={{ color: "#e0ca3cff", fontWeight: "300" }}> Ian Gu</Title>
                    <Title level={1} style={{ color: "white", fontWeight: "380" }}>.</Title>
                </Space>
                <br />
                <Button type={"primary"} size={"large"} style={{ marginBottom: "150px" }}>
                    <Link to={"about"} smooth={true} duration={700}>
                        <Space size={10}>
                            About Me <FontAwesomeIcon icon={faAngleDoubleDown} />
                        </Space>
                    </Link>
                </Button>
                <Row justify={"center"} align={"middle"}>
                    <Col>
                        <Space direction={"horizontal"} align={"baseline"} size={15}>
                            <Button icon={<LinkedinFilled />} type={"primary"}
                                href={"https://www.linkedin.com/in/iancgu/"} shape={"circle"}>
                            </Button>
                            <Button icon={<GithubFilled />} type={"primary"} href={"https://github.com/iangu48"}
                                shape={"circle"}>
                            </Button>
                            <Paragraph copyable code>
                                <a href={"mailto:ian.gu@mail.utoronto.ca"} style={{ color: "white" }}>
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
