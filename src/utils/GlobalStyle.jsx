import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,
::after,
::before {
  box-sizing: border-box;
}

body{
  font-family: 'Roboto', sans-serif;
  background-color: ${p=>p.theme.colors.pink};
}

ul{
  padding: 0;
  margin: 0;
  list-style: none;
}

h1, h2, h3, p{
  margin: 0;
}
button{
  cursor: pointer;
  border: none;
}

input{
  width: 230px;
  background-color: ${p => p.theme.colors.light};
  border: none;
  outline: 2px solid ${p => p.theme.colors.pink};
  border-radius: 2px;
  transition: outline-color ${p => p.theme.animation};
  color: ${p => p.theme.colors.darkBlue};
  
  &:hover, &:focus{
    outline-color: ${p => p.theme.colors.blue};
  }
}

`;

export default GlobalStyle;
