import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'NotoSansKR';
        font-weight: 900;
        font-display: swap;
        src: local('NotoSansKR Black'), url(./fonts/NotoSansKR-Black.ttf) format('ttf');
    }
    @font-face {
        font-family: 'NotoSansKR';
        font-weight: 800;
        font-display: swap;
        src: local('NotoSansKR ExtraBold'), url(./fonts/NotoSansKR-ExtraBold.ttf) format('ttf');
    }
    @font-face {
        font-family: 'NotoSansKR';
        font-weight: 700;
        font-display: swap;
        src: local('NotoSansKR Bold'), url(./fonts/NotoSansKR-Bold.ttf) format('ttf');
    }
    @font-face {
        font-family: 'NotoSansKR';
        font-weight: 600;
        font-display: swap;
        src: local('NotoSansKR SemiBold'), url(./fonts/NotoSansKR-SemiBold.ttf) format('ttf');
    }
    @font-face {
        font-family: 'NotoSansKR';
        font-weight: 500;
        font-display: swap;
        src: local('NotoSansKR Medium'), url(./fonts/NotoSansKR-Medium.ttf) format('ttf');
    }
    @font-face {
        font-family: 'NotoSansKR';
        font-weight: 400;
        font-display: swap;
        src: local('NotoSansKR Regular'), url(./fonts/NotoSansKR-Regular.ttf) format('ttf');
    }
    @font-face {
        font-family: 'NotoSansKR';
        font-weight: 300;
        font-display: swap;
        src: local('NotoSansKR Light'), url(./fonts/NotoSansKR-Light.ttf) format('ttf');
    }
    @font-face {
        font-family: 'NotoSansKR';
        font-weight: 200;
        font-display: swap;
        src: local('NotoSansKR ExtraLight'), url(./fonts/NotoSansKR-ExtraLight.ttf) format('ttf');
    }
    @font-face {
        font-family: 'NotoSansKR';
        font-weight: 100;
        font-display: swap;
        src: local('NotoSansKR Thin'), url(./fonts/NotoSansKR-Thin.ttf) format('ttf');
    }

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

    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    body {
        line-height: 1;
        font-family: 'NotoSansKR', sans-serif;
        ::-webkit-scrollbar {
            display: none;
        }
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

    a {
        color: black;
        text-decoration: none;
    }
    
    button {
        display: block;
        cursor: pointer;
        border: none;
        background: none;
    }
    
    input:focus {
        outline: none;
    }

    :root{
        // Colors
        --color-point1:#4D7EFF;
        --color-point2:#666271;
        --color-sub1:#C0C0C0;
        --color-sub2:#EFEFEF;
        --color-sub3:#FFFFFF;

        // Font weight
        --weight-extra-bold: 800;
        --weight-bold: 700;
        --weight-semi-bold: 600;
        --weight-medium: 500;
        --weight-regular: 400;
        --weight-light: 300;
    }
`;

export default GlobalStyle;
