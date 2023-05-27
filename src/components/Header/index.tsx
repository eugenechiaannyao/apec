import { useState } from "react";
import { Row, Col, Drawer, Select } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
    HeaderSection,
    LogoContainer,
    Burger,
    NotHidden,
    Menu,
    CustomNavLinkSmall,
    Label,
    Outline,
    Span,
} from "./styles";
import { useNavigate } from "react-router-dom";
import i18n from "i18next";

const handleChange = (language: string) => {
    i18n.changeLanguage(language);
};

const countryLanguageMap: { [country: string]: string } = {
    English: "en",
    Chinese: "zh",
    // Add other countries and their language codes here
};

const LanguageDropdown = () => {
    const { Option } = Select;

    const handleMenuClick = (country: string) => {
        const language = countryLanguageMap[country];
        handleChange(language);
    };

    return (
        <Select
            defaultValue="English"
            style={{ width: 120 }}
            onChange={handleMenuClick}
        >
            {Object.keys(countryLanguageMap).map((country) => (
                <Option key={country} value={country}>
                    {country}
                </Option>
            ))}
        </Select>
    );
};

const Header = ({ t }: any) => {
    const navigate = useNavigate();
    const [visible, setVisibility] = useState(false);

    const showDrawer = () => {
        setVisibility(!visible);
    };

    const onClose = () => {
        setVisibility(!visible);
    };

    const MenuItem = () => {
        const scrollTo = (id: string) => {
            const element = document.getElementById(id) as HTMLDivElement;
            element.scrollIntoView({
                behavior: "smooth",
            });
            setVisibility(false);
        };
        return (
            <>
                <CustomNavLinkSmall onClick={() => navigate("/marketplace")}>
                    <Span>{t("Marketplace")}</Span>
                </CustomNavLinkSmall>
                <CustomNavLinkSmall onClick={() => navigate("/collaborations")}>
                    <Span>{t("Collaborations")}</Span>
                </CustomNavLinkSmall>
                <LanguageDropdown />
                <CustomNavLinkSmall
                    style={{ width: "180px" }}
                    onClick={() => navigate("/login")}
                >
                    <Span>
                        <Button>{t("Login")}</Button>
                    </Span>
                </CustomNavLinkSmall>
            </>
        );
    };

    return (
        <HeaderSection>
            <Container>
                <Row justify="space-between">
                    <LogoContainer to="/" aria-label="homepage">
                        <SvgIcon src="logo.svg" width="101px" height="64px" />
                    </LogoContainer>
                    <NotHidden>
                        <MenuItem />
                    </NotHidden>
                    <Burger onClick={showDrawer}>
                        <Outline />
                    </Burger>
                </Row>
                <Drawer closable={false} visible={visible} onClose={onClose}>
                    <Col style={{ marginBottom: "2.5rem" }}>
                        <Label onClick={onClose}>
                            <Col span={12}>
                                <Menu>Menu</Menu>
                            </Col>
                            <Col span={12}>
                                <Outline />
                            </Col>
                        </Label>
                    </Col>
                    <MenuItem />
                </Drawer>
            </Container>
        </HeaderSection>
    );
};

export default withTranslation()(Header);
