import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    :root {
        --ff-title: 'Geo', cursive;
        --ff-regular: 'Inter', sans-serif;
        --ff-tags: 'Antonio', sans-serif;

        --background-footer: ${({ theme }) => theme.COLORS.BACKGROUND_FOOTER };
        --background-header: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER };
        --background-main-area: ${({ theme }) => theme.COLORS.BACKGROUND_MAIN_AREA };
        --background-thumbnail: ${({ theme }) => theme.COLORS.BACKGROUND_THUMBNAIL };
        --scrollbar: ${({ theme }) => theme.COLORS.SCROLLBAR };
        --border: ${({ theme }) => theme.COLORS.BORDER };
        --separator: ${({ theme }) => theme.COLORS.SEPARATOR };
        --text: ${({ theme }) => theme.COLORS.TEXT };
        --profile-link: ${({ theme }) => theme.COLORS.PROFILE_LINK };
        --content-area: ${({ theme }) => theme.COLORS.CONTENT_AREA };
        --title: ${({ theme }) => theme.COLORS.TITLE };
        --tag: ${({ theme }) => theme.COLORS.TAG };
        --red: ${({ theme }) => theme.COLORS.RED };
        --green: ${({ theme }) => theme.COLORS.GREEN };
        --shadow-light: ${( {theme }) => theme.COLORS.SHADOW_LIGHT}; 
    }

    body {
        background-color: var(--background-main-area);
        color: var(--title);
        
        -webkit-font-smoothing: antialiased;
    }
    
    body {
        font-family: var(--ff-regular);
        font-size: 18px;
    }
    
    .tags {
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

    .tags:hover {
        filter: brightness(1.2);
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: all 0.1s;
    }

    button:hover, a:hover{
        filter: brightness(0.9);
    }
`;