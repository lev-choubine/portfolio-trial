import { useState } from 'react';
import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios';
import Photo from './Components/Photo';
import Info from './Components/Info';
import Nav from './Components/Nav';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import Git from './Components/Git'
import Works from './Components/Works'
import Weather from './Components/Weather'
const work= [
{
  id:1,
  Name: 'Racing Game',
  link: 'https://lev-choubine.github.io/'
},
{id:2,
  Name: 'Famished',
  link: 'https://famished.herokuapp.com/'

}


]

function App() {
  return (
    <BrowserRouter>

<div className="App">
<Photo />
  <Nav />
  <Route path="/" exact component={Info} />
  <Route path="/Contact" component={Contact} />
  <Route path="/Resume" component={Resume} />
  <Route path="/Weather" component={Weather} />

  <Route path="/Git" render={()=>{return <Git proceduresList={work} /> }} />
  <Route path="/Works/:id" render={(routeInfo)=>{
       console.log(routeInfo.match.params);
       const id = routeInfo.match.params.id
       const targetProcedures= work.find((p)=>p.id===parseInt(id))
       return <Works procedure={targetProcedures} />
     }} />

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


