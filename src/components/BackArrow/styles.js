import styled from "styled-components";

export const Container = styled.button`
    > div{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        color: var(--tag);
    }
    
    border: none;
    background: none;

    > a {
        color: var(--tag)
    }

    &:active {
        filter: brightness(1.1);
    }

    svg {
        font-size: 18px;
        margin: 0 5px;
    }
`;
