import { css } from "@emotion/react";

export const globalStyle = css`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400;500;600;700&family=Righteous&display=swap');

    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Poppins', 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -ms-overflow-style: none;
    }

    html {
        overflow: scroll;
        overflow-x: hidden;
    }
    ::-webkit-scrollbar {
        width: 0;
        background: transparent;
    }

    .row>*{
        padding: 20px
    }

    @media (max-width: 910px) {
        .row>*{
            padding: 0px;
            margin-left: 0px;
        }
    }

    .boxLoading {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 85vh;
        justify-content: center;
        align-items: center;
    }
`