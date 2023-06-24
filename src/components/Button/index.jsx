import { Container } from './styles';

export function Button({ label, loading = false, width, ...rest }) {
    console.log( width )

    return (
        <Container
            type="button"
            disabled={loading}
            {...rest}
        >
            {loading ? 'Processing...' : label}
        </Container>
    );
};
