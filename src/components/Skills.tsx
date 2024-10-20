import styled from "styled-components";

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

export default function Skills(){
    return(
        <StyledDiv>
            <h1>Skills</h1>
            <h4>Skills</h4>
            <ul>
                <li>Proficient in Microsoft Word, Microsoft Powerpoint, and Google Suite</li>
                <li>Proficient in Python, Java, C, and assembly</li>
            </ul>
            <h4>Languages</h4>
            <ul>
                <li>Conversational fluency in Cantonese</li>
                <li>Literacy in Mandarin</li>
            </ul> 
        </StyledDiv>
    );
}