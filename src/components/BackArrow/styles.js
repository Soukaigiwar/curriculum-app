import styled from "styled-components";

export const Container = styled.button`
    display: flex;
    
    font-size: 16px;
    color: var(--tag);
    border: none;
    background: none;

    &:active {
        filter: brightness(1.1);
    }

    svg {
        font-size: 18px;
        margin: 0 5px;
    }
`;
