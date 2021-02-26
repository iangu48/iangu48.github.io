import {Document, Page, pdfjs} from "react-pdf";
import React, {useState} from "react";
import {Button, Col, Row, Space} from "antd";
import Title from "antd/lib/typography/Title";
import {Link} from "react-scroll";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleDown} from "@fortawesome/free-solid-svg-icons";
import resumeFile from "../static/files/resume.pdf";

export default function ResumeSection() {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    // eslint-disable-next-line no-unused-vars
    const [numPages, setNumPages] = useState(null);
    // eslint-disable-next-line no-unused-vars
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({numPages}) {
        setNumPages(numPages);
    }

    return (
        <Row justify={"center"} align={"middle"} xs={10}>
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
            {/*<Col offset={1}>*/}
            {/*    <Divider type={"vertical"} style={{background: "white", height: "85vh", marginRight: "0"}}/>*/}
            {/*</Col>*/}
            {/*<Col>*/}
            {/*    <Divider type={"vertical"} style={{background: "white", height: "90vh"}}/>*/}
            {/*</Col>*/}
            <Col offset={1}>
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
            {/*<Col>*/}
            {/*    <Divider type={"vertical"} style={{background: "white", height: "90vh", marginRight: 0}}/>*/}
            {/*</Col>*/}
            {/*<Col>*/}
            {/*    <Divider type={"vertical"} style={{background: "white", height: "85vh"}}/>*/}
            {/*</Col>*/}
        </Row>
    );
}
