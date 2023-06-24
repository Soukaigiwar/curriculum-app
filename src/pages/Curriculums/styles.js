import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-areas:
        "header"
        "content"
        "footer";
`;

export const Content = styled.div`
    grid-area: content;
    
    width: 95%;
    padding: 10px;
    
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
