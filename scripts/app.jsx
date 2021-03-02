import logo from "./logo.svg";
import "./App.css";
import styled from "styled-componentes";

const AppContainer=styled.div`
    width:100%;
    height:100%;
    background-color:#1c2127;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    color:#fff;
`;
function App()
{
    return <AppContainer>Object Detection!</AppContainer>;

}
export default App;