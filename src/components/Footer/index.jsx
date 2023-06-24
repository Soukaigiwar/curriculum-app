import { Container } from './styles';
import { RiHeartFill } from 'react-icons/ri';

export function Footer({label}) {
    return (
        <Container>
            Made with <span><RiHeartFill /></span>by Sergio Mello{label}
        </Container>
    );
};
