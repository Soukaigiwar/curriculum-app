import { Container, Content } from './styles';
import { Link } from "react-router-dom";

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Section } from '../../components/Section';
import { FileList } from '../../components/FileList';

export function Curriculums() {

    return (
        <Container>
            <Header />
            <Content>
                <Section label={"Saved files:"}>
                    <FileList />
                </Section>
                <Section label={"Templates:"}>
                    <FileList />
                </Section>
            </Content>
            <Footer />
        </Container>
    );
};
