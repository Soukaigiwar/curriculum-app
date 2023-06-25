import styled from 'styled-components';

export const Container = styled.div`    
    max-height: 280px;
    overflow-y: auto;
    font-size: 50px;
    color: var(--text);

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

    > ul {
        display: grid;
        justify-content: start;
        grid-template-columns: repeat(auto-fit, minmax(160px, max-content));
        grid-gap: 20px;
        padding: 20px;
        margin: 20px 0;
        list-style: none;
        
        > li {
            div:nth-child(1) {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                padding: 10px;
                border: 10px;
                border-radius: 6px;
                min-width: 160px;
                height: 150px;
                background: var(--background-thumbnail);
            }
            
            cursor: pointer;
            transition: transform 200ms;
            
            p {
                font-size: 14px;
                text-align: center;
                margin-top: 10px;
            }

            &:hover {
                transform: scale(1.1)
            }


            a {
                color: var(--title)
            }

        }
    }
`;
