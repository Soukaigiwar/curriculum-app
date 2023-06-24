import { Container, Form } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { RiMailLine, RiLockPasswordLine, RiEditBoxLine } from "react-icons/ri";

export function SignUp() {

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
                    />
                <Input
                    type="text"
                    label="Last Name"
                    autoComplete="lastName"
                    id="lastName"
                    icon={RiEditBoxLine}
                    />
                <Input
                    type="email"
                    label="Email"
                    autoComplete="email"
                    id="email"
                    icon={RiMailLine}
                    />
                <Input
                    type="password"
                    label="Password"
                    autoComplete="password"
                    id="password"
                    icon={RiLockPasswordLine}
                />
                    <div className="button">
                        <Button label="REGISTER" />
                    </div>
                    <div className="agreement">
                        <input type="checkbox" name="agreement" id="agreement" />
                        <label htmlFor="agreement">I agree all statements in <a href="#">Terms of service</a>.</label>
                    </div>
                </Form>
            <Footer />
        </Container>
    )
};
