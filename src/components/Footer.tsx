import styled from "styled-components";

const StyledFooter = styled.footer`
    background-color: #d9edff;
    font-family: Arial, Helvetica, sans-serif;
    color: rgb(6, 6, 114);
`

export default function Footer(){
    return(
        <StyledFooter>
             <p>All Rights Reserved by Madeline Wong &copy;</p>
        </StyledFooter>

    );
}