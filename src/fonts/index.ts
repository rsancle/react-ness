import { createGlobalStyle } from "styled-components";
import PressStart2P from "./PressStart2P-Regular.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Press Start 2P';
        src: local('Press Start 2P'), local('Press Start 2P'),
        url(${PressStart2P}) format('truetype');
        font-weight: 300;
        font-style: normal;
    }
`;
