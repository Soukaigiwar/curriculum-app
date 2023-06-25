import { Link } from 'react-router-dom';
import { Container } from './styles';
import { RiHeartFill } from 'react-icons/ri';

export function Footer({label}) {
    return (
        <Container>
            Made with <span><RiHeartFill /></span>by <Link to="mailto:sergiomello@gmail.com">Sergio Mello</Link>{label}
        </Container>
    );
};
