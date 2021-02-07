import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Photo from './Components/Photo';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import Languages from './Components/Languages';
import Token from './Components/Token';
import TabSensei from './Components/TabSensei';
import CrazyDriver from './Components/CrazyDriver';
import Famished from './Components/Famished';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Languages />
      <div id="fixedHeader">
        <div id="header">
          <Photo />
        </div>
        <div id="below">
          <div id="belowWhiteOut">
            <Route path="/Resume" component={Resume} /> 
            <div id="projects">
              <Token />
              <TabSensei />
              < CrazyDriver />
              <Famished />
            </div>
            <Route path="/Contact" component={Contact} />
          </div>
        </div>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App;


