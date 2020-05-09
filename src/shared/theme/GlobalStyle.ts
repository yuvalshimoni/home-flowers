import { createGlobalStyle, css } from 'styled-components';

const defaultStyles = css`
  margin: 0px;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
`;

const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  
  * { 
    min-height: 0;
    outline:none;
    box-sizing: border-box; 
    position: relative;
    :focus {
      outline:none;
    } 
  }
  
  html {
    min-height: 100vh;
    overflow-y: scroll;
  }

  html, body {
      width: 100%;
      display:flex;
  }

  body {
    width:100%;
    overflow: hidden;
    direction: rtl;
    ${defaultStyles};
  }

  #root {
    width: 100%;
  }

`;

export default GlobalStyle;
