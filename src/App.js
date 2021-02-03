
import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Photo from './Components/Photo';
import Info from './Components/Info';
import Info2 from './Components/Info2';

import Contact from './Components/Contact';
import Resume from './Components/Resume';
import Git from './Components/Git'


const work= [

  {id:1,
    Name: 'Token(click here for GirHub)',
    heroku: 'https://token-dates.herokuapp.com/',
    video: 'https://res.cloudinary.com/dok4pz3i3/video/upload/v1612330016/yph9sdzwvieq1y8r9a1m.mp4',
    info: "#EJS, #Express, #Mongo, #Mongoose, #Node.js, #Sockets.io, #Cloudinary, #Passport, #React.js",
    speil:"A dating application where the user can either swipe to the right to like their potential match or swipe left to keep searching. A swip to the right will trigger a chat with another user. The chat can only take place if another user accepts the invitation.",
    gitHubF: "",
    gitHubB: "",
    
  },
  {id:2,
    Name: 'Crazy Driver(click here for GirHub)',
    heroku: 'https://lev-choubine.github.io/',
    video: 'https://res.cloudinary.com/dok4pz3i3/video/upload/v1612331176/xainkofuximwxrq7toki.mp4',
    info: "#javaScript, #SpriteAnimation, #CSS, #Taste",
    speil:"A vintage styled racing game nodding toward the Wangan midnight racing culture. Collision detection and a lot of fun.",
    gitHubF: "",
    gitHubB: "",
    
  },
  {
  id:3,
  Name: 'Tab Sensei(click here for GitHub)',
  heroku: 'http://tabsensei.herokuapp.com/',
  video:'https://res.cloudinary.com/dok4pz3i3/video/upload/v1610911373/bkzo3hrldtxf16oj8w8g.mp4',
  info: "#React.js, #Express, #MongoDB, #Mongoose, #Node.js, #YoutubeAPI, #SongsterrAPI, #Cloudinary, #Passport",
  speil:"A search engine application that lets the user pull up guitar tabs and youTube tutorials for desired songs. The user is able to store or delete the preferred tabs, comment on the tabs and delete tabs. The pallication comes with a bank of 6  metronome beats. You can manipulate playback speed in realtime. ",
  gitHubF: "https://github.com/lev-choubine/tab-sensei-frontend-group-project",
  gitHubB: "https://github.com/lev-choubine/tab-sensei-backend/settings"
},
{id:4,
  Name: 'Famished(click here for GirHub)',
  heroku: 'https://famished.herokuapp.com/',
  video: 'https://res.cloudinary.com/dok4pz3i3/video/upload/v1610911433/xzdvof4wywepqwgoex4u.mp4',
  info: "#EJS, #Express, #SQL, #Sequelize, #Node.js, #GoogleMatrixDistanceAPI, #Cloudinary, #Passport",
  speil:"A multi-profile search engine that allows users and mobile vendors connect with eachother based on proximity. The apllication filters out user's desired food items, matches them against the offers by sellers and returns options based on est price and proximity! Have fun - you can use '420St Nicholas Ave New York, NY, 10027' as your default addresss if you want to test the lice application out.",
  gitHubF: "",
  gitHubB: "",
  
}



]

function App() {
  return (
    <BrowserRouter>

<div >
  <div id="fixedHeader">
  <div id="header">
<Info />
<Photo />
<Info2 />
   </div>
   </div>
   <div id="below">
   <Route path="/Resume" component={Resume} />
  <Route path="/" render={()=>{return <Git proceduresList={work} /> }}/>
  <Route path="/Contact" component={Contact} />
  </div>



  {/* <Route path="/Git" render={()=>{return <Git proceduresList={work} /> }} /> */}
  {/* <Route path="/Works/:id" render={(routeInfo)=>{
       console.log(routeInfo.match.params);
       const id = routeInfo.match.params.id
       const targetProcedures= work.find((p)=>p.id===parseInt(id))
       return <Works procedure={targetProcedures} />
     }} /> */}

{/*  

 
<Route path="/Procedures" render={()=>{return <Procedures proceduresList={proceduresList}  /> }} />
 
 <Route path="/procedures/:id" render={(routeInfo)=>{
   console.log(routeInfo.match.params);
   const id = routeInfo.match.params.id
   const targetProcedures= proceduresList.find((p)=>p.id===parseInt(id))
   return <ProcedureDetails procedure={targetProcedures} />
 }} /> */}

</div>
</BrowserRouter>
  )
}

export default App;


