import styled from "styled-components"

export const Container = styled.textarea`
    width: 100%;
    min-height: 150px;

    margin: 16px auto;
    padding: 16px;
    border: none;
    border-radius: 6px;
    resize: vertical;
    
    color: var(--title);
    background-color: var(--background-thumbnail);
    font-size: 16px;

    &:invalid {
        &::placeholder{
            color: var(--red);
            opacity: 0.6;
        }
    }

    &:focus {
        outline: none;
    }
    
    &::placeholder {
        color: var(--title);
        opacity: 0.6;
    } 
`
