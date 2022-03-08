import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Inicio from './componentes/Inicio'
import Blog from './componentes/Blog'
import Post from './componentes/Post'
import AcercaDe from './componentes/AcercaDe'
import Header from './componentes/Header'
import styled from 'styled-components';
import Error404 from './componentes/Error404'

const App = () => {
  return ( 
    <BrowserRouter>
      <ContenedorPrincipal>
        <Header/>
        <Main>
          <Routes>
              <Route path="*" element={<Error404/> } />
              <Route path="/" element={<Inicio/> } />
              <Route path="/blog" element={<Blog/>} />
              <Route path="/post/:id" element={<Post/>} />
              <Route path="/acerca-de" element={<AcercaDe/> } />
          </Routes>
        </Main>
      </ContenedorPrincipal>
    </BrowserRouter>
  );
} 

const ContenedorPrincipal = styled.div`
  padding: 40px;
  width: 90%;
  max-width: 700px;
`;
const Main = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129,129,129,0.1);
`
 
export default App;