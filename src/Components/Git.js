import { BrowserRouter, Route, Link } from 'react-router-dom';
import React from 'react';
import ReactPlayer from "react-player";

function Git(props) {
  
const procedureItems = props.proceduresList.map((p, index)=>{
return (
<div>
    <div className="video_box" key={index}>
        <div className="game_info">   
            <h3>{p.name}</h3>
            <h5 className="lingo">{p.info}</h5>
            <h6>{p.speil}</h6>
       
             <a  href={p.heroku}><div className="linkstoapps"><img className="gittohabbu" src="https://cdn.iconscout.com/icon/free/png-512/heroku-6-599422.png"/><p>Live Version</p></div></a>
        </div>
            <div className="videoBox">
                <ReactPlayer 
                playing={true}
                controls={true}
                loop={true}
                url={p.video}
                width="700px"
                height="auto"/>
            </div>
    </div> 
</div>)
    })
    return(
        <div id="projects">
            {procedureItems}
        </div>
    )
  }
  
  export default Git;