import { createGlobalStyle } from "styled-components";

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
   }
 button{
    font-family: 'Space Mono', monospace;  
 }
   
 `;
