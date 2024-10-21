import styled from "styled-components";
import Calculator from "./Calculator";

const StyledDiv = styled.div`
    background-color: #d9edff;
    font-family: Arial, Helvetica, sans-serif;
    color: rgb(6, 6, 114);
    margin-left: 26%;
    padding: 1%;
    height: 92vh;

    @media screen and (max-width: 750px) {
        width: 100%;
        margin-left: 0%;
    }
`

export default function Projects(){
    return(
        <StyledDiv>
            <h1>Projects</h1>
            <Calculator/>
        </StyledDiv>
    );
}