import { Container, Content } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { FcSportsMode } from 'react-icons/fc';

export function Home() {
    
    return (
        <Container>
            <Header />
            <Content>
                <p>generate and organize your<span>curriculums.</span></p>
                <p>sign up<span>now! <a href="#"><FcSportsMode /></a></span></p>
            </Content>
            <Footer />
        </Container>
    )
};
