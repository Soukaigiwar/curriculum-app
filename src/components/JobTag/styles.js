import styled from "styled-components";

export const Container = styled.div`
    display: inline-flex;
    align-items: center;

    width: calc(500px / 3 - 12px);
    height: 50px;
    margin: 5px auto;
    margin-right: 5px;

    background: ${({ isNew }) =>  isNew ? 'none' : 'var(--background-thumbnail)'};
    border: ${({ isNew }) =>  isNew ? '2px dashed var(--background-thumbnail)' : 'none'};

    border-radius: 6px;
    padding-right: 10px;
    position: relative;
    
    input {
        width: calc(100% - 10px);
        padding: 16px;
        background: none;
        border: none;
        color: var(--title);
        font-size: 14px;
        opacity: 0.6;

        &:focus {
            outline: none;
        }
    }

    > button {
        position: absolute;
        right: 16px;
        font-size: 16px;
        background: none;
        border: none;
        opacity: 0.6;
        transition: ease 200ms;

        &:hover {
            opacity: 1;
            transform: scale(1.4);
        }
    }

    .button_delete {
        color: var(--red);
    }
    
    .button_add {
        color: var(--green);
    }
`;
