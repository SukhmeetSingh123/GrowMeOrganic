import {createGlobalStyle} from "styled-components";
export const GlobalStyle = createGlobalStyle`
body{
    background-color:#eeeeee;
    font-family: math;
    color:black;
}
.login_container{
    border: 1px solid black;
    width : 40rem;
    height: 22rem;
    padding-top: 4rem;
}
.form-group{
    margin:0.8rem;
    
}
.input_tag{
    border-radius:0.8rem;
}
.button{
    padding-left:4rem;
}
.login_container{
    background-color:#e3d7d7;
}
.row{
    background-color:#f6f6f6;
}
.container{
    border:1px solid black;
}
.grid{
    display:grid;
}
.grid-three-column{
    grid-template-columns: repeat(3, 1fr); 
   
}
.error{
    color:red;
}
`;