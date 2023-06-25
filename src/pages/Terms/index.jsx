import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { BackArrow } from "../../components/BackArrow";
import { Section } from "../../components/Section";

export function Terms() {

    return (
        <Container>
            <Header />
            <Content>
                <BackArrow label="Back" />
                <Section label="Terms of service">
                    <p>
                        All data will be kept confidential and will never be exposed to third parties.
                    </p>
                    <p>
                        This app is only for education purpose.
                    </p>
                    <p>
                        Do Not input any sensible content, and every data may be lost at any time.
                    </p>
                </Section>
            </Content>
            <Footer />
        </Container>
    )
};
