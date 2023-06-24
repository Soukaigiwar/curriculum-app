import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    
    grid-template-areas:
    "header"
    "content"
    "footer";
`;

export const Content = styled.div`
    grid-area: content;

    min-width: 500px;
    padding: 20px;
    
    background-color: var(--content-area);
    border-radius: 6px;
    margin: 10px auto;
    height: calc(100vh - 210px);
    overflow-y: auto;

    &::-webkit-scrollbar {
            width: 10px;
    }
    
    &::-webkit-scrollbar-track {
        background: var(--content-area);
    }
    
    &::-webkit-scrollbar-thumb {
        height: 4px;
        border: 1px solid;
        border-radius: 9999px;
        border-color: var(--border);
        background-color: var(--scrollbar);
        box-shadow: 0px 3px 3px 0px var(--shadow-light);
    }
`;

export const Form = styled.form`
    width: 500px;
    margin: 0 auto;
    padding: 10px 100px;
    
    img {
        display: flex;
        margin: 0 auto;
        margin-bottom: 30px;
        width: 180px;
        border-radius: 50%;
        box-shadow: 0px 3px 3px 0px var(--shadow-light);
    }

    
`;

export const Avatar = styled.div`
    position: relative;
    
    label {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 48px;
        height: 48px;
        bottom: 140px;
        left: 180px;
        font-size: 30px;
        color: white;
        background-color: var(--tag);
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0px 3px 3px 0px var(--shadow-light);
        transition: ease 400ms;

        input {
            display: none;
        }

        &:hover {
            transform: scale(1.1);
        }
    }


`;
