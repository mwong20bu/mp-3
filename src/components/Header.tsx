import styled from "styled-components";

const StyledHeader = styled.header`
    padding: 2%; 
    background-color: rgb(41, 0, 130); 
    color: aliceblue; 
    font-family: Arial, Helvetica, sans-serif;

    @media screen and (max-width: 750px) {
        text-align: center;
    }
`

export default function Header(){
    return(
        <StyledHeader>
            <h1>Madeline Wong's Resume</h1>
            <p>This is the most recent online resume for Madeline Wong</p>
        </StyledHeader>

    );
}