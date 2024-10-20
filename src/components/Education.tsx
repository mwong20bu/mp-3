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

export default function Education(){
    return(
        <StyledDiv>
            <h1>Education</h1>
            <main>
            <h3>Boston University | Boston, MA</h3>
            <p>Bachelor of Arts in Computer Science, Expected Graduation May 2025</p>
            <p>GPA: 3.81</p>
            <p>Honors: Dean' List</p>
            <p>Relevant Coursework: Analysis of Algorithms, Software Engineering, Data Structures, Computer Systems, Probability in Computing 
            </p>
            <br/>
            
            <hr/>
            <h3>Hunter College High School | New York, NY</h3>
            <p>High School Diploma, Graduated June 2020</p>
            <p>GPA: 93.69</p>
            <p>Honors: 2020 National Merit Scholarship Finalist</p>
            <p>AP courses taken: AP Chemistry, AP Calculus AB, AP Psychology
            </p><br/>
        </main>
        </StyledDiv>
    );
}