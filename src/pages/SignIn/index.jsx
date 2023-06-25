import { Container, Form } from "./styles";
import { Link } from "react-router-dom";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { RiMailLine, RiLockPasswordLine } from "react-icons/ri";

export function SignIn() {

    return (
        <Container>
            <Header />
            <Form>
                <h2>Login</h2>
                <Input
                    autoComplete="email"
                    type="email"
                    id="email"
                    label="Email"
                    icon={RiMailLine}
                />
                <Input
                    autoComplete="password"
                    type="password"
                    id="email"
                    label="Password"
                    icon={RiLockPasswordLine}
                />
                <div className="button">
                    <Button label="SIGN IN" />
                </div>
                <div className="option">
                    <p>Forgot <Link to="/reset_password">username / password</Link></p>
                    <p>Don´t have an account? <Link to="/register">sign-up</Link></p>
                </div>
            </Form>
            <Footer />
        </Container>
    )
};
