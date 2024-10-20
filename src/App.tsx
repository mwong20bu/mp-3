import {Routes, Route, createBrowserRouter, RouterProvider} from 'react-router-dom';
import Nav from "./components/Nav.tsx";
import Home from "./components/Home.tsx";
import Education from "./components/Education.tsx";
import Work from "./components/Work.tsx";
import Extracurriculars from "./components/Extracurriculars.tsx";
import Skills from "./components/Skills.tsx";
import Projects from './components/Projects.tsx';
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import styled from "styled-components";

const StyledContainer = styled.div`
  background-color: rgb(147, 221, 250);
`
function Root(){
  return(
    <>
    <StyledContainer>
      <Header/>
      <Nav/>
        <Routes>
          <Route path={`/`} element={<Home/>}/>
          <Route path={`/education`} element={<Education/>}/>
          <Route path={`/work`} element={<Work/>}/>
          <Route path={`/extracurriculars`} element={<Extracurriculars/>}/>
          <Route path={`/skills`} element={<Skills/>}/>
          <Route path={`/projects`} element={<Projects/>}/>        
        </Routes>
      <Footer/>
    </StyledContainer>
    </>
  );
}

const router=createBrowserRouter(
  [
      {path: "*", Component: Root}
  ]
);

export default function App(){
  return <RouterProvider router={router}/>
}
