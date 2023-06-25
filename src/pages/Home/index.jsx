import { Container, Content } from "./styles";
import { Link } from "react-router-dom";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { FcSportsMode } from 'react-icons/fc';

export function Home() {
    
    return (
        <Container>
            <Header />
            <Content>
                <p>generate and organize your<span>curriculums.</span></p>
                <p><Link to="/register">sign up</Link><span>now!<FcSportsMode /></span></p>
            </Content>
            <Footer />
        </Container>
    )
};
