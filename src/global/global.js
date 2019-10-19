import { createGlobalStyle } from "styled-components";
import background from "../assets/background.jpeg";
export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
*{
  margin:0;
  padding:0;
  outline:0;
  box-sizing:border-box;
}
body{
  background:#191920 url(${background}) no-repeat center top;
  background-size:cover;
  -webkit-font-smoothing:antialiased;
}
body,input,button{
  font-size:14 Roboto,sans-serif;
}
#root{
  max-height:1080px;
  min-height: 450px;
  min-width:450px;
  max-width:1920px;
  margin:0 auto;
}
button{
  cursor: pointer;
}
a{
  text-decoration:none
}
`;
