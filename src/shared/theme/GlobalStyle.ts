import { createGlobalStyle, css } from 'styled-components';

const defaultStyles = css`
  margin: 0px;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
`;

const GlobalStyle = createGlobalStyle`

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
