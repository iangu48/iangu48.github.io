import {Button, Col, Row, Space} from "antd";
import Title from "antd/lib/typography/Title";
import {GithubFilled, LinkedinFilled} from "@ant-design/icons";
import Paragraph from "antd/lib/typography/Paragraph";
import React from "react";

export default function ContactSection() {
    return (
        <Row className={"h100"} justify={"center"} align={"middle"}>
            <Col offset={1}>
                <Title level={2} style={{color: "white", marginTop: "30px", fontWeight: 300}}>Contact Me</Title>
                <Space direction={"horizontal"} align={"baseline"} size={15}>
                    <Button icon={<LinkedinFilled/>} type={"primary"} href={"https://www.linkedin.com/in/iancgu/"}
                            shape={"circle"}>
                    </Button>
                    <Button icon={<GithubFilled/>} type={"primary"} href={"https://github.com/iangu48"}
                            shape={"circle"}>
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
