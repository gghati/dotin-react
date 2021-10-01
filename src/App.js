import React from "react";
import Blogs from './Blogs';
import Certificates from './Certificates';
import Buttons from './Buttons';
import OpenSource from "./openSource";
import Projects from './Projects'; 
import WorkedFor from "./Workedfor";
import Nav from "./Nav";
import './css/style.css';
import './css/bootstrap.min.css';

import { HashRouter as Router, Route, useParams} from 'react-router-dom'

function Page(){
  const { page } =  useParams();

  if(page==='certifications') return <><Nav page='Certificates' num='2'></Nav><Certificates/></>
  else if(page==='projects') return <><Nav page='Projects' num='3'></Nav><Projects/></>
  else if(page==='workedfor') return <><Nav page='Experience' num='4'></Nav><WorkedFor/></>
  else if(page==='opensource') return <><Nav page='Open Source' num='5'></Nav><OpenSource/></>
  else if(page==='blogs') return <><Nav page='Blogs'></Nav><Blogs/></>
}

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
          <Route exact path='/'>
            <Nav page='Home' num='1'></Nav>
            <Buttons/>
          </Route>
          <Route path='/:page'>
            <Page />
          </Route>
      </Router>    
    </div>
  );
}

export default App;
