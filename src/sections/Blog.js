import {Button, Col, Row, Space, Typography} from "antd";
import Title from "antd/lib/typography/Title";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleDown, faEdit} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-scroll";
import React from "react";

export default function BlogSection() {
    return (
        <Row className={"h100"} justify={"center"} align={"middle"}>
            <Col offset={1} xs={10}>
                <Title level={2}
                       style={{color: "white", marginTop: "30px", marginBottom: 0, fontWeight: 300}}>Blog</Title>

                <Space direction={"vertical"}>
                    <Space direction={"horizontal"} align={"baseline"}>
                        <FontAwesomeIcon icon={faEdit} color={"white"} style={{fontSize: 25}}/>
                        <Typography.Link href={"https://blog.iangu.me"} style={{fontWeight: 300, fontSize: 26}}>
                            https://blog.iangu.me
                        </Typography.Link>
                    </Space>

                    <br/>
                    <Title level={5} style={{color: "white", textAlign: "left", marginBottom: 100, fontWeight: 300}}>
                        This is kind of like a time capsule that I will continue to build on over the years. I want to
                        treat this both like an overview of my life, and a journal where I can keep track of whatever I
                        want.
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
