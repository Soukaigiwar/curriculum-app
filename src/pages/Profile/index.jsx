import { RiUserLine, RiMailLine, RiLockPasswordLine, RiCameraLine } from "react-icons/ri";
import { Container, Content, Form, Avatar } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section";

import { BackArrow } from "../../components/BackArrow";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";


export function Profile() {
    return (
        <Container>
            <Header />
            <Content>
                <BackArrow label="Back" />
                <Section label="Profile" />
                <Form>
                    <Avatar>
                        <img
                            src="https://github.com/Soukaigiwar.png"
                            alt="User photo."
                        />
                        <label htmlFor="avatar">
                            <RiCameraLine />
                            <input
                                id="avatar"
                                type="file"
                            />
                        </label>
                    </Avatar>
                    <Input
                        label="First Name"
                        autoComplete="username"
                        type="text"
                        icon={RiUserLine}
                        required
                    />
                    <Input
                        label="Last Name"
                        autoComplete="username"
                        type="text"
                        icon={RiUserLine}
                        required
                    />
                    <Input
                        label="Email"
                        autoComplete="email"
                        icon={RiMailLine}
                        required
                    />
                    <Input
                        label="New Password"
                        autoComplete="new-password"
                        type="password"
                        icon={RiLockPasswordLine}
                    />
                    <Input
                        label="Current Password"
                        autoComplete="current-password"
                        type="password"
                        icon={RiLockPasswordLine}
                    />
                    <Button label="Update" />
                </Form>
            </Content>
            <Footer />
        </Container>
    );
};
