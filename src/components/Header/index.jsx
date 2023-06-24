import { Container, Brand, Profile, Logout } from './styles';
import { RiShutDownLine } from 'react-icons/ri'
import { Tag } from "../Tag"

export function Header() {
    return (
        <Container>
            <Brand>
                <div>
                    <h1>curriculum</h1>
                    <Tag label="Generator" />
                </div>
            </Brand>
            <Profile>
                <div>
                    <strong>
                        <span>Welcome, &nbsp;</span>
                        <a href="#">Sergio Mello</a>
                    </strong>
                </div>

                <a href="#">
                    <img
                    src="https://github.com/Soukaigiwar.png"
                    alt="User photo."
                    />
                </a>
            <Logout>
                <RiShutDownLine />
            </Logout>
            </Profile>
        </Container>
    )
}