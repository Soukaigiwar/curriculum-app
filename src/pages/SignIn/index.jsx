import { Container, Form } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { useAuth } from "../../hooks/auth.jsx";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { RiMailLine, RiLockPasswordLine } from "react-icons/ri";

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();

    function handleSignIn() {
        signIn({ email, password });
    };

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
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    autoComplete="password"
                    type="password"
                    id="email"
                    label="Password"
                    icon={RiLockPasswordLine}
                    onChange={e => setPassword(e.target.value)}
                />
                <Button label="Login" onClick={handleSignIn} />

                <div className="option">
                    <p>Forgot <Link to="/reset_password">username / password</Link></p>
                    <p>Don´t have an account? <Link to="/register">sign-up</Link></p>
                </div>
            </Form>
            <Footer />
        </Container>
    )
};
