import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: var(--background-main-area);
    color: var(--tag);

    border-radius: 6px;
    margin: 26px 0;

    position: relative;

    > input {
        height: 50px;
        width: 100%;
        
        padding: 16px;
        color: var(--title);
        background: var(--background-thumbnail);
        border: none;
        border-radius: 6px;
        font-size: 14px;

        &::placeholder {
            color: var(--background-header);
        }

        &:focus {
            outline: none;
        }

        &:invalid {
            &::placeholder{
                color: var(--red);
                opacity: 0.6;
            }
        }
    }

    > label {
        position: absolute;
        padding: 0 10px 5px 16px;
        font-weight: 400;
        color: var(--title);
        top: -20px
    }

    > svg {
        margin-left: 16px;
    }
`
