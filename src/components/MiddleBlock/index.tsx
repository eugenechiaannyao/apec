import React from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Fade } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";
import { useNavigate } from "react-router-dom";

interface MiddleBlockProps {
    title: string;
    content: string;
    button: string;
    t: any;
}

const MiddleBlock = ({ title, content, button, t }: MiddleBlockProps) => {
    const navigate = useNavigate();

    return (
        <MiddleBlockSection>
            <Fade>
                <Row justify="center" align="middle">
                    <ContentWrapper>
                        <Col lg={24} md={24} sm={24} xs={24}>
                            <h1>{t(title)}</h1>
                            <Content>{t(content)}</Content>
                            {button && (
                                <Button
                                    name="submit"
                                    onClick={() => navigate("/login")}
                                >
                                    {t(button)}
                                </Button>
                            )}
                        </Col>
                    </ContentWrapper>
                </Row>
            </Fade>
        </MiddleBlockSection>
    );
};

export default withTranslation()(MiddleBlock);
