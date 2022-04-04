import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* Reset Css */

    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    /* Global Styles */
    :root{
    --dark-blue: #126BA5;
    --light-blue: #52B6FF;
    --gray: #666666;
    --green: #8FC549;
    }

    *{
        box-sizing: border-box;
        font-family: 'Lexend Deca', sans-serif;
    }

    body{
        width: 100vw;
        height: 100vh;
        background-color: #F2F2F2;
    }

    .root{
        width: 100%;
        height: 100%;
    }
    
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input,
    button {
        width: 303px;
        height: 45px;
    }

    form button {
        background-color: var(--light-blue);
        border-radius: 5px;
        border: none;
        color: #ffffff;
        font-size: 21px;
        margin-bottom: 26px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    input {
        margin-bottom: 6px;
        padding: 10px;
        border: 1px solid #d5d5d5;
        border-radius: 5px;
        color: var(--gray);
        font-size: 20px;
    }

    input::placeholder {
        color: #DBDBDB;
        font-size: 20px;
    }

    input:disabled {
        background-color: #F2F2F2;
        color: #AFAFAF;
    }

    input:focus{
        outline: none;
    }

    button:disabled{
        opacity: 0.7;
    }

    button:hover{
        cursor: pointer;
    }

    main{
        margin: 70px 0;
        padding: 28px 20px 105px;
    }

    h1{
        font-size: 23px;
        line-height: 29px;
        color: var(--dark-blue);
    }

    p{
        color: var(--gray);
        font-size: 18px;
        line-height: 22px;
    }

    a{
        font-family: 'Lexend Deca', sans-serif;
        text-decoration-color: var(--light-blue);
    }
`;

export default GlobalStyle;
