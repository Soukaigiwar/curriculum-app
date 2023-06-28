import { Link } from 'react-router-dom';
import { Container, Brand, Profile, Logout } from './styles';
import { RiShutDownLine } from 'react-icons/ri';
import { Tag } from "../Tag";
import { useAuth } from '../../hooks/auth';

export function Header() {
    const { signOut } = useAuth();
    
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
                        <Link to="/profile">Sergio Mello</Link>
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