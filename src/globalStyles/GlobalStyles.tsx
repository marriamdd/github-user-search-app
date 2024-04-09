import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
        font-family: 'Space Mono';
        src: url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
    }
    html{
        font-size: 62.5%;
    }
   body{
    box-sizing: border-box;
   margin: 0;
   padding: 3.1rem 2.4rem 5rem;
   font-family: 'Space Mono', monospace;
   background: #141D2F;
   display: flex;
   align-items: center;
   justify-content: center;
 @media screen and (min-width: 768px){
  /* padding:10.4rem 9.8rem 20rem */
 }
   }
 button {
    font-family: 'Space Mono', monospace;
color: white;
 }

 ${(props) => css`
   body {
     background: ${!props.lightMode ? "#141D2F" : "#F6F8FF;"};
   }

   p,
   h2,
   h1,
   span {
     color: ${props.lightMode ? "#4B6A9B" : "#fff"};
   }
   input {
     color: ${props.lightMode ? "#4B6A9B" : "#fff"};
     &::placeholder {
       color: ${props.lightMode ? "#4B6A9B" : "white"};
     }
   }
 `}
`;
