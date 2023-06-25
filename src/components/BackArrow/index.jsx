import { Link } from "react-router-dom";
import { Container } from "./styles";
import { FiArrowLeft } from "react-icons/fi";

export function BackArrow({label}) {
    return (
        <Container>
            <span><Link to="/"><FiArrowLeft /></Link></span>{label}
        </Container>
    );
};
