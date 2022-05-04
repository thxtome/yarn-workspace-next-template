import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: "NanumSquare";
    font-weight: 400;
    src: url("/fonts/NanumSquareR.eot");
    src: url("/fonts/NanumSquareR.eot?#iefix") format("embedded-opentype"),
        url("/fonts/NanumSquareR.woff") format("woff"), url("/fonts/NanumSquareR.ttf") format("truetype");
  }
  @font-face {
    font-family: "NanumSquare";
    font-weight: 700;
    src: url("/fonts/NanumSquareB.eot");
    src: url("/fonts/NanumSquareB.eot?#iefix") format("embedded-opentype"),
        url("/fonts/NanumSquareB.woff") format("woff"), url("/fonts/NanumSquareB.ttf") format("truetype");
  }
  @font-face {
    font-family: "NanumSquare";
    font-weight: 800;
    src: url("/fonts/NanumSquareEB.eot");
    src: url("/fonts/NanumSquareEB.eot?#iefix") format("embedded-opentype"),
        url("/fonts/NanumSquareEB.woff") format("woff"), url("/fonts/NanumSquareEB.ttf") format("truetype");
  }
  @font-face {
    font-family: "NanumSquare";
    font-weight: 300;
    src: url("/fonts/NanumSquareL.eot");
    src: url("/fonts/NanumSquareL.eot?#iefix") format("embedded-opentype"),
        url("/fonts/NanumSquareL.woff") format("woff"), url("/fonts/NanumSquareL.ttf") format("truetype");
  }

  html {
    overflow:hidden;
  }
  
  #__next {
    width:100vw;
    height:100vh;
    box-sizing:border-box;
  }

  html {
    touch-action: none;
  }

  body {
    font-family: "NanumSquare";
    &:active {
      outline:none;
      -webkit-tap-highlight-color: transparent;
    }    
    &:focus {
      -webkit-tap-highlight-color: rgba(255,255,255,0); 
    }
  }
  
  div {
    &:focus {
      outline:none;
      -webkit-tap-highlight-color: transparent;
    }
    &:active {
      outline:none;
      -webkit-tap-highlight-color: transparent;
    }    
  }

  a {
    text-decoration:none;
    &:focus {
      outline:none;
      -webkit-tap-highlight-color: transparent;
    }
    &:active {
      outline:none;
      -webkit-tap-highlight-color: transparent;
    }        
  }

  body.prevent-scroll {
    overflow: hidden;
  }

`;

export default GlobalStyle;
