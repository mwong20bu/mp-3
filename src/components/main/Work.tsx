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

export default function Work(){
    return(
        <StyledDiv>
            <h1>Work Experience</h1>
            <h3> Tutor | HunterPrep | New York, NY</h3>
                <p>I was a tutor for HunterPrep, a tutoring company focusing on group and private 
                    tutoring with the goal of preparing for the Hunter College High School admissions exam. My responsibilities included:</p>
                    <ul>
                        <li>Instructing a weekly group course of 18 students, including exam proctoring and content review</li>
                        <li>Privately tutoring students in math, language arts, and essay writing for 2 hours a week</li>
                        <li>Grading students' weekly essays and providing written feedback</li>
                    </ul>
                
                
                <hr/>
                <h3>Server and Cashier | Panda Express | Brooklyn, NY</h3>
                <p>I worked in Panda Express as a server and cashier. During my time working there, I served food, used Panda Express' POS system 
                    as a cashier, and maintained standards for customer service and cleanliness of work stations. 
                </p>

                
                <hr/>
                <h3>Barista and Cashier | Vivi Bubble Tea | New York, NY</h3>
                <p>I worked in Vivi Bubble Tea as a barista and cashier. During my time working there, I prepared drinks, took orders in English, Cantonese, and Mandarin, maintained cleanliness
                    of work stations, and kept record of inventory and supplies.
                </p><br/>
        </StyledDiv>
    );
}