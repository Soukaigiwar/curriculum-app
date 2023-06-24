import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-areas:
        "header"
        "content"
        "footer";
    
    > .curriculum {
        display: grid;
        grid-template-areas: "side content";
        margin: 40px auto;
        grid-template-columns: 200px auto;
        max-width: 737px;
        color: var(--text);
        border-radius: 6px;
        box-shadow: 5px 5px 5px 0px var(--shadow-light);

        height: calc(100vh - 260px);
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
        }
    `;

export const Side = styled.div`
    grid-area: side;
    padding: 10px;

    background-color: var(--scrollbar);
    
    > ul {
        font-size: 12px;
        font-weight: 400;
        color: var(--text);
        margin-top: 16px;

        > p {
            line-height: 20px;
            transition: all 250ms;
        }
        
        > li {
            display: flex;
            flex-direction: column;
            font-size: 14px;
            font-weight: 800;
            margin: 8px 0;
            transition: all 250ms;

            &:hover {
                padding: 5px 2px 5px 30px;
                font-weight: 800;
                background: #0079ff;
                border-radius: 6px;
                filter: invert(1);
                transition: all 250ms;
                cursor: pointer;

                background-image: url('data:image/svg+xml,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.0235 10.4646L7.58548 20.9026H2.76794L2.76483 16.0819L13.2028 5.64392L18.0235 10.4646Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.2028 5.64388L15.0003 3.84641C15.7813 3.06536 17.0477 3.06536 17.8287 3.84641L19.8209 5.83863C20.602 6.61968 20.602 7.88601 19.8209 8.66706L18.0235 10.4645V10.4645" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
                background-size: inherit;
                background-repeat: no-repeat;
                background-position: left 2px top 2px;
            }
        }
    }
    `;

export const Content = styled.div`
    grid-area: content;
    
    background-color: var(--content-area);
    padding: 10px;
    text-align: start;
    
    > h2 {
        padding: 10px;
        font-size: 16px;
        color: var(--text);
        transition: all 250ms;
        
        &:hover {
                padding: 15px 2px 15px 30px;
                font-weight: 800;
                background: #0079ff;
                border-radius: 6px;
                filter: invert(1);
                transition: all 250ms;
                cursor: pointer;

                background-image: url('data:image/svg+xml,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.0235 10.4646L7.58548 20.9026H2.76794L2.76483 16.0819L13.2028 5.64392L18.0235 10.4646Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.2028 5.64388L15.0003 3.84641C15.7813 3.06536 17.0477 3.06536 17.8287 3.84641L19.8209 5.83863C20.602 6.61968 20.602 7.88601 19.8209 8.66706L18.0235 10.4645V10.4645" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
                background-size: inherit;
                background-repeat: no-repeat;
                background-position: left 5px top 10px;
            }
        }
        
        > p {
        padding: 0 10px 10px;
        font-size: 14px;
        font-weight: 400;
        color: var(--text);
        line-height: 20px;
        text-align: justify;
        letter-spacing: 1px;
        transition: all 250ms;
    }
`;

export const Links = styled.ul`
    list-style: none;

    > li {
        margin-top: 12px;

        a {
            color: var(--text);
            font-weight: 800;
        }
    }
`;
