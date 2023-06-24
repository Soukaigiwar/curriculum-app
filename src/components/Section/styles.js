import styled from 'styled-components';

export const Container = styled.section`
    margin: 10px 0 18px;
    padding: 5px 10px;
    width: 100%;
    border-bottom: solid 1px var(--separator);
    font-weight: 400;
    font-size: 12px;

    > h2 {
        line-height: 16px;
        margin-bottom: 16px;
        color: var(--text);

        font-family: var(--ff-regular);
        text-transform: uppercase;
        font-size: 14px;
        font-weight: 800;
    }
`;
