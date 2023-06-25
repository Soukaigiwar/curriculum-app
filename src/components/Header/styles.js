import styled from 'styled-components';

export const Container = styled.div`
    grid-area: header;

    height: 105px;
    width: 100vw;

    border-bottom: 1px solid var(--border);

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 40px 0;
    

    background-color: var(--background-header);
    box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.1);
`;

export const Brand = styled.div`
    display: flex;
    align-items: center;
    font-family: var(--ff-title);

    
    > div {
        display: flex;
        align-items: baseline;
        margin-right: 20px;
        cursor: default;

        > a {
            color: var(--title)
        }
        
        h1 {
            text-transform: capitalize;
        }
        
        span {
            font-family: var(--ff-regular);
            color: var(--content-area);
            font-size: 10px;
            text-transform: uppercase;
            background-color: var(--tag);
            margin: 0 3px;
            padding: 5px 10px;
            border-radius: 10px;
            cursor: default;
        }
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    
    font-family: var(--ff-regular);

    > a img {
        width: 50px;
        height: 50px;
        border-radius: 50px;
        margin-right: 60px;
        
        box-shadow: 3px 3px 10px 0px rgba(0,0,0,0.4);
    }

    a {
        color: var(--profile-link);
    }

    > div {
        display: flex;
        flex-direction: column;
        margin-right: 16px;
        line-height: 24px;

        span {
            font-size: 14px;
            color: var(--tag);
        }
        
        strong {
            font-size: 18px;
            color: var(--content-area);
        }
    }
`;

export const Logout = styled.button`
    border: none;
    background: none;

    > svg {
        color: var(--title);
        font-size: 36px;
    }
`;
