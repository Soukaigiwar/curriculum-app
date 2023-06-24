import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    
    background-color: var(--background-header);
    color: var(--title);
    
    font-family: var(--ff-regular);
    font-weight: 800;
    font-size: 16px;

    height: 56px;
    border: 0;
    padding: 0 16px;
    margin-top: 16px;
    border-radius: 10px;

    &:disabled {
        opacity: 0.5;
        filter: none;
        font-size: 17px;
    }

    &:active {
        filter: brightness(1.1);
        font-size: 17px;
    }
`;