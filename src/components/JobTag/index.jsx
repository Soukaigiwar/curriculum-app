import { AiOutlineTag } from "react-icons/ai";
import { HiOutlineTrash } from "react-icons/hi2";

import { Container } from "./styles";

export function JobTag({ isNew = false, value, onClick, ...rest }) {
    return (
        <Container isNew={isNew}>
            <input
                type="text"
                value={value}
                readOnly={!isNew}
                {...rest}
            />

            <button
                type="button"
                onClick={onClick}
                className={ isNew ? "button_add": "button_delete" }
            >
                { isNew ? <AiOutlineTag /> : <HiOutlineTrash /> }
            </button>
        </Container>
    );
};
