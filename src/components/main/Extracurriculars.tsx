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

export default function Extracurriculars(){
    return(
        <StyledDiv>
            <h1>Extracurriculars</h1>
            <h3>BU Dancesport Club</h3>
                <p><strong>Roles: Treasurer, Vice President</strong><br/>
                    I have been involved in BU's ballroom dancesport club since fall 2021. We are a competitive ballroom dancing club. 
                    In my time with the club, I have spent a year as treasurer, and am now vice president. My responsibilities as treasurer
                    have included: 
                </p>
                    <ul>
                        <li>working on semester budget</li>
                        <li>documenting purchase requests</li>
                        <li>consolidating invoices</li>
                        <li>managing communication with other collegiate clubs, judges, and vendors regarding competition payments</li>
                    </ul>
                <p>As a current vice president, I assist the president of the club with:</p>
                    <ul>
                        <li> organization of monthly board meetings</li>
                        <li> delegation and organization of tasks within the eboard</li>
                    </ul>

                 <hr/>
                <h3>TechTogether Hackathon</h3>
                <p>I worked with a partner in the 2022 TechTogether Hackathon to create a basic budget tracking website over the course of 36 hours.</p>
                <hr/>
                <h3>Rescuing Leftover Cuisine Club</h3>
                <p><strong>Roles: Volunteer and Lead Rescuer</strong><br/>
                    I volunteered with the Rescuing Leftover Cuisine from 2015 to 2020. RLC is a food waste prevention volunteer organization that collects leftover food from restaurants and 
                    other culinary businesses, and transports the food to shelters and pantries. As a volunteer, I participated in food transport meetings, and as a lead rescuer I 
                    helped schedule volunteer trips and served as a resource for new volunteers. 
                </p><br/>
        </StyledDiv>
    );
}