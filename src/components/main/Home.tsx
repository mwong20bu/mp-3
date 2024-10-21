import styled from "styled-components";

const StyledDiv = styled.div`
    background-color: #d9edff;
    font-family: Arial, Helvetica, sans-serif;
    color: rgb(6, 6, 114);
    margin-left: 26%;
    padding: 1%;

    @media screen and (max-width: 750px) {
        width: 100%;
        margin-left: 0%;
    }
`

export default function Home(){
    return(
        <StyledDiv>
            <img src="self_copy.jpg" alt="An image of myself" id="profile" 
                style={{display: "block", marginLeft: "auto", marginRight: "auto", paddingTop: "1vh", height: "60vh", width: "auto"}}/>
            <p>Hello! I am Madeline Wong, a current senior at Boston University. I am a computer science major.</p>
            <p>On this website, you can find further information about my educational record, work experience, extracurriculars, and other topics as listed in the navigational menu.</p>
        </StyledDiv>
    );
}