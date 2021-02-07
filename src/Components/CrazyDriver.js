import React from 'react';
import ReactPlayer from "react-player";

function CrazyDriver () {
    return(
        <div>
            <div className="video_box">
        <div className="game_info">   
            <h3>Crazy Driver</h3>
            <h5 className="lingo">#javaScript, #SpriteAnimation, #CSS</h5>
            <h6>A vintage styled racing game nodding toward the Wangan midnight racing culture. Collision detection and a lot of fun.</h6>
            <div className="linksu">
                <a href="https://lev-choubine.github.io/">
                    <div className="linkstoapps">
                        <img className="gittohabbu" src="https://image.flaticon.com/icons/png/512/25/25231.png"/><p>Live Version</p>
                    </div>
                </a>
                <a href="https://github.com/lev-choubine/Crazy-Driver">
                    <div className="linkstoapps">
                        <img className="gittohabbu" src="https://cdn.iconscout.com/icon/free/png-256/github-brand-logo-47401.png"/><p>GitHub Repo</p>
                    </div>
                </a>
            </div>
        </div>
            <div className="videoBox">
                <ReactPlayer 
                playing={true}
                controls={true}
                loop={true}
                url="https://res.cloudinary.com/dok4pz3i3/video/upload/v1612331176/xainkofuximwxrq7toki.mp4"
                width="700px"
                height="auto"/>
            </div>
    </div> 
        </div>
    )
}

export default CrazyDriver;