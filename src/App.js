import React from "react";
import Certificates from './Certificates';
import Buttons from './Buttons';
import OpenSource from "./openSource";
import Projects from './Projects'; 
import Nav from "./Nav";
import './css/style.css';
import './css/bootstrap.min.css';

import { HashRouter as Router, Route, useParams, Routes} from 'react-router-dom'
import WorkExp from "./WorkExp";
import Recommend from "./recommend";

function Page(){
  const { page } =  useParams();

  if(page==='certifications') return <><Nav page='Certificates' num='2'></Nav><Certificates/></>
  else if(page==='projects') return <><Nav page='Projects' num='3'></Nav><Projects/></>
  else if(page==='workexp') return <><Nav page='Experience' num='4'></Nav><WorkExp/></>
  else if(page==='recommend') return <><Nav page='Recommendations' num='5'></Nav><Recommend/></>
  else if(page==='opensource') return <><Nav page='Open Source' num='6'></Nav><OpenSource/></>
}

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path='/' element={
              <>
                <Nav page='Home' num='1'/><Buttons/>
              </>
          }/>
          <Route path='/:page' element={<Page />} />
        </Routes>
      </Router>    
    </div>
  );
}

export default App;
