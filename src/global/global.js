//Estilizacao global utilizando styled components
import { createGlobalStyle } from "styled-components";
import background from "../assets/background.svg";
import "react-toastify/dist/ReactToastify.css";
export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
*{
  margin:0;
  padding:0;
  outline:0;
  box-sizing:border-box;
}
html,body,#root{
  height: 100%;
  background: url(${background}) no-repeat center top;
  background-size: cover;
}
body,input,button{
  font-size:14 Roboto,sans-serif;
}
button{
  cursor: pointer;
}
a{
  text-decoration:none!important;
 
}
ul {
  list-style: none;
}
`;
