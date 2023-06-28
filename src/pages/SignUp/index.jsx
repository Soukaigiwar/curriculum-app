import { Container, Form } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { RiMailLine, RiLockPasswordLine, RiEditBoxLine } from "react-icons/ri";

export function SignUp() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp() {
        if (!firstName || !lastName || !email || !password) {
            return alert("Fill all fields.");
        }

        api.post("/users/add", { first_name: firstName, last_name: lastName, email, password })
            .then(() => {
                navigate("/login");
            })
            .catch(error => {
                if (error.response) alert(error.response.data.message);
                else alert("Error on register.");
            });
    };

    return (
        <Container>
            <Header />
            <Form>
                <h2>Sign up</h2>
                <Input
                    type="text"
                    label="First Name"
                    id="firstName"
                    autoComplete="firstName"
                    icon={RiEditBoxLine}
                    onChange={e => setFirstName(e.target.value)}
                    />
                <Input
                    type="text"
                    label="Last Name"
                    autoComplete="lastName"
                    id="lastName"
                    icon={RiEditBoxLine}
                    onChange={e => setLastName(e.target.value)}
                    />
                <Input
                    type="email"
                    label="Email"
                    autoComplete="email"
                    id="email"
                    icon={RiMailLine}
                    onChange={e => setEmail(e.target.value)}
                    />
                <Input
                    type="password"
                    label="Password"
                    autoComplete="password"
                    id="password"
                    icon={RiLockPasswordLine}
                    onChange={e => setPassword(e.target.value)}
                />
                    <div className="button">
                    <Button label="REGISTER" onClick={handleSignUp} />
                    </div>
                    <div className="agreement">
                        <input type="checkbox" name="agreement" id="agreement" />
                        <label htmlFor="agreement">I agree all statements in <Link to="/terms_of_service">Terms of service</Link>.</label>
                    </div>
                </Form>
            <Footer />
        </Container>
    )
};
