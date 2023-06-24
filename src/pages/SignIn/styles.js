import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    
    grid-template-areas:
    "header"
    "content"
    "footer";
`;

export const Form = styled.form`
    grid-area: content;

    width: 500px;
    margin: 0 auto;
    padding: 24px 100px;
    
    background-color: var(--content-area);
    border-radius: 6px;
    margin: 10px auto;
    height: calc(100vh - 210px);
    overflow-y: auto;

    > h2 {
        text-align: center;
        padding: 32px;
    }

    > .option {
        margin-top: 10px;
        font-size: 14px;
        text-align: center;
    }

    a {
        font-weight: 800;
        color: var(--text)
    }

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
