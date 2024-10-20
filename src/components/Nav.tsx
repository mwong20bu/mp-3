import {Link} from "react-router-dom";
import { styled } from "styled-components";

const StyledNav = styled.nav`
    width: 25%;
    height: 100vh;
    float: left;
    background-color: rgb(94, 94, 246);
    color: #F2F2F2;
    text-align: center;
    display: inline;

    @media screen and (max-width: 750px) {
        width: 100%;
        height: 8vw;
        display: flex; 
        justify-content: space-between;
        align-items: center;
    }
`

const StyledUl = styled.ul`
    list-style-type: none;
    margin: 1vw;
    padding: 0;

    @media screen and (max-width: 750px) {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        
    }
`

const StyledLi = styled.li`
    padding: 3vw;
    font-size: calc(5px + 2vh);

    @media screen and (max-width: 750px) {
        padding: 2vw;
        float: left;
        font-size: calc(1px + 2vw);
    }
`

const StyledLink = ({to, children}: {to: string, children: React.ReactNode}) => {
    return(
        <Link style={{color: "white", textDecoration: "none", fontFamily: "Arial, Helvetica, sans-serif"
        }} to={to}>
            {children}
        </Link>
    )
}

export default function Nav(){
    return(
        <StyledNav>
            <StyledUl>
                <StyledLi>
                    <StyledLink to={`/`}>Home</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to={`/education`}>Education</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to={`/work`}>Work Experience</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to={`/extracurriculars`}>Extracurriculars</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to={`/skills`}>Skills</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to={`/projects`}>Projects</StyledLink>
                </StyledLi>
            </StyledUl>
        </StyledNav>
    );
}