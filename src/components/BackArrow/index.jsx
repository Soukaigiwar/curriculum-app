import { Link } from "react-router-dom";
import { Container } from "./styles";
import { FiArrowLeft } from "react-icons/fi";

export function BackArrow({label}) {
    return (
        <Container>
            <div>
                <Link to="/"><span><FiArrowLeft /></span>{label}</Link>
            </div>
        </Container>
    );
};
