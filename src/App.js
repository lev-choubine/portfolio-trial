import React from 'react';
import './App.css';
import './Project.css';
import './Resume.css';
import './Kanji.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Photo from './Components/Photo';
import Resume from './Components/Resume';
import Kanji from './Components/Kanji';
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
        </div>
        <div id="below">
          <div id="belowWhiteOut">
            <Route path="/Resume"  component={Resume} /> 
            <Route exact strict path="/" component={Kanji} /> 
            <Route path="/TabSensei" component={TabSensei} /> 
            <Route path="/CrazyDriver" component={CrazyDriver} /> 
            <Route path="/Token" component={Token} /> 
            <Route path="/Famished"  component={Famished} /> 
          </div>
        </div>
        
     
      </BrowserRouter>
    </div>
  )
}

export default App;


