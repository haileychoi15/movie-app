import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap');
  
  body {
    background: #eff3f7;
    height: 100%;
    font-family: 'Noto Sans JP', sans-serif;
  }
  
  body * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }
  
  ul,ol,li {
    list-style: none;
  }
  
  button {
    cursor: pointer;
    outline: none;
  }
`;

export default GlobalStyle;