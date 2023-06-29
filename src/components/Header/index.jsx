import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Brand, Profile, Logout } from "./styles";
import { RiShutDownLine } from "react-icons/ri";
import { Tag } from "../Tag";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

export function Header() {
    const { signOut } = useAuth();
    const { user } = useAuth();

    if (!user) {
        return (
            <Container>
                <Brand>
                    <div>
                        <Link to="/">
                            <h1>curriculum</h1>
                        </Link>
                        <Tag label="Generator" />
                    </div>
                </Brand>
                <Profile>
                    <div>
                        <strong>
                        <span>Welcome, &nbsp;</span>
                            <Link style={{ fontSize: 16 }} to="/login">SignIn</Link>
                            <span style={{ fontSize: 16, color: 'white', paddingLeft: 18}}>/</span>
                        </strong>
                    </div>
                    <div>
                        <strong>
                            <Link style={{ fontSize: 16 }} to="/register">SignUp</Link>
                        </strong>
                    </div>
                </Profile>
            </Container>
        )
    } else {
        const [userName, setUserName] = useState("");

        useEffect(() => {
            const token = localStorage.getItem("@curriculum:token");
            const user = localStorage.getItem("@curriculum:user");
    
            if (token && user) {
                api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    
                setUserName(user.first_name);
            };
        });

        return (
            <Container>
                <Brand>
                    <div>
                        <Link to="/">
                            <h1>curriculum</h1>
                        </Link>
                        <Tag label="Generator" />
                    </div>
    
                </Brand>
                <Profile>
                    <div>
                        <strong>
                            <span>Welcome, &nbsp;</span>
                            <Link to="/profile">{user.first_name}</Link>
                        </strong>
                    </div>
    
                    <Link to="/profile">
                        <img
                            src="https://github.com/Soukaigiwar.png"
                            alt="User photo."
                        />
                    </Link>
                    <Logout onClick={signOut}>
                        <RiShutDownLine />
                    </Logout>
                </Profile>
            </Container>
        )
    }

    
}