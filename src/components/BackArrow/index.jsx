import { Container } from "./styles";
import { FiArrowLeft } from "react-icons/fi";

export function BackArrow({label}) {
    return (
        <Container>
            <span><FiArrowLeft /></span>{label}
        </Container>
    );
};
