import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    grid-area: footer;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    position: fixed;
    bottom: 0px;
    background-color: var(--background-footer);
    color: var(--content-area);
    font-size: 14px;
    box-shadow: 5px 0px 5px 5px var(--shadow-light);

    a {
        margin-left: 9px;
        color: var(--white);


        &:hover {
            transform: scale(1.2);
        }
    }
    
    span {
        font-size: 20px;
        padding: 0 9px;
        color: var(--red);
    }
`;
