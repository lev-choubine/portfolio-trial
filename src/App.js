import { useState } from 'react';
import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Photo from './Components/Photo';
import Info from './Components/Info';

import Contact from './Components/Contact';
import Resume from './Components/Resume';
import Git from './Components/Git'


const work= [
{
  id:1,
  Name: 'Tab Sensei(click here for GitHub)',
  link: 'https://github.com/lev-choubine/tab-sensei-frontend',
  video:'https://res.cloudinary.com/dok4pz3i3/video/upload/v1610911373/bkzo3hrldtxf16oj8w8g.mp4',
  info: "#React.js, #Express, #MongoDB, #Mongoose, #Node.js, #YoutubeAPI, #SongsterrAPI, #Cloudinary, #Passport",
  speil:"An engine seach application that lets the user pull up guitar tabs and youTube tutorials for desired songs. The user is able to store or delete the preferred tabs, comment on the tabs and delete tabs. The pallication comes with a bank of 6  metronome beats. You can manipulate playback speed in realtime. "
},
{id:2,
  Name: 'Famished(click here for GirHub)',
  link: 'https://famished.herokuapp.com/',
  video: 'https://res.cloudinary.com/dok4pz3i3/video/upload/v1610911433/xzdvof4wywepqwgoex4u.mp4',
  info: "#EJS, #Express, #SQL, #Sequelize, #Node.js, #GoogleMatrixDistanceAPI, #Cloudinary, #Passport",
  speil:"A multi-profile search engine that allows users and mobile vendors connect with eachother based on proximity. The apllication filters out user's desired food items, matches them against the offers by sellers and returns options based on est price and proximity! Have fun - you can use '420St Nicholas Ave New York, NY, 10027' as your default addresss if you want to test the lice application out."
  
}


]

function App() {
  return (
    <BrowserRouter>

<div className="App">
  <div id="header">
<Info />
<Photo />
<Contact />
   </div>
   <Route path="/Resume" component={Resume} />
  <Route path="/" render={()=>{return <Git proceduresList={work} /> }}/>
  <Route path="/Contact" component={Contact} />
  


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


