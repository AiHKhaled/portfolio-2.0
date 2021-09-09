import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
body{
    font-family: 'Fira Sans', sans-serif;
    background-color: #1f1f22;
    color: white;
    display: flex;
    overflow-x: hidden;


}
p{
        padding: 3rem 0rem;
        color: #afafaf;
        font-size: 1.2rem;
        line-height: 200%;
        font-family: 'Fira Sans', sans-serif;
    }
    span{
        font-weight: bold;
        color: #23d997;
        font-size: 4rem;
        font-family: 'Allison', cursive;
        margin-left: 2rem;

    }
    h2 {
    font-weight: bold;
    font-family: "Fira Sans", sans-serif;
    font-size: 2.5rem;
  }
  a{
      text-decoration: none;
      color:white;
  }
  `;
export default GlobalStyles;
