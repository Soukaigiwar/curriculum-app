import { useState } from "react";
import { RiUserLine, RiMailLine, RiLockPasswordLine, RiCameraLine } from "react-icons/ri";
import { Container, Content, Form, Avatar } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section";

import { BackArrow } from "../../components/BackArrow";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { useAuth } from "../../hooks/auth";


export function Profile() {
    const { user, updateProfile } = useAuth();

    const [firstName, setFirstName] = useState(user.first_name);
    const [lastName, setLastName] = useState(user.last_name);
    const [email, setEmail] = useState(user.email);
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    async function handleUpdate() {
        const user = {
            first_name: firstName,
            last_name: lastName,
            email,
            current_password: currentPassword,
            new_password: newPassword
        };

        await updateProfile({ user });
    }

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
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />
                    <Input
                        label="Last Name"
                        autoComplete="username"
                        type="text"
                        icon={RiUserLine}
                        required
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />
                    <Input
                        label="Email"
                        autoComplete="email"
                        icon={RiMailLine}
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Input
                        label="New Password"
                        autoComplete="new-password"
                        type="password"
                        icon={RiLockPasswordLine}
                        value={newPassword}
                        onChange={e => setNewPassword(e.target.value)}
                    />
                    <Input
                        label="Current Password"
                        autoComplete="current-password"
                        type="password"
                        icon={RiLockPasswordLine}
                        defaultValue={currentPassword}
                        onChange={e => setCurrentPassword(e.target.value)}
                    />
                    <Button label="Update" onClick={handleUpdate} />
                </Form>
            </Content>
            <Footer />
        </Container>
    );
};
