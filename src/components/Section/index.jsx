import { Container } from './styles';

export function Section({ label, children }) {
    return (
        <Container>
            <h2>{label}</h2>
            {children}
        </Container>
    );
};
