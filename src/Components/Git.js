import { BrowserRouter, Route, Link } from 'react-router-dom';
import React from 'react';
import ReactPlayer from "react-player";

function Git(props) {
  
    const procedureItems = props.proceduresList.map((p)=>{
        return <div>
        <div class="video_box">
                 <div class="game_info">   
        <h3>{p.name}</h3>
        <h5 class="lingo">{p.info}</h5>
        <h6>{p.speil}</h6>
        </div>
        <div className="videoBox">
        <ReactPlayer 
             playing={true}
             controls={true}
             loop={true}
             url={p.video}
             width="600px"
             height="auto"/>
             </div>
             
             </div> 
             </div>
    })
    return(
        <div id="projects">
            {procedureItems}
        </div>
    )
  }
  
  export default Git;