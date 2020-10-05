import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap');
  
  body {
    margin: 0;
    padding: 0;
    background: #eff3f7;
    height: 100%;
    font-family: 'Noto Sans JP', sans-serif;
  }
  
  ul {
    list-style: none;
  }
`;

export default GlobalStyle;