import React from 'react';
import ReactPlayer from "react-player";
import { Link } from 'react-router-dom';

function CrazyDriver () {
    return(
        <div className="lowerBody">
             <div id="kanjiParent">
            <div className="tsugi">
                <Link  to="/">Kanji</Link> 
            </div>
            <div className="video_box">
                <div className="game_info">   
                    <h3 className="projectHeader">湾岸竞速(Wangan Midnight)</h3>
                </div>
                <div className="videoBox">
                    <div className="videoParent">
                        <ReactPlayer 
                        playing={true}
                        controls={true}
                        loop={true}
                        url="https://res.cloudinary.com/dok4pz3i3/video/upload/v1612331176/xainkofuximwxrq7toki.mp4"
                        width="700px"
                        height="auto"/>
                    </div>
                </div>
                <h5 className="lingo">#javaScript, #SpriteAnimation, #CSS</h5>
                <div>
                    <h6 className="projectDescription">A vintage styled racing game. The theme is Midnight Wangan manga.</h6>
                </div>
                <div className="linksu">
                        <a href="https://lev-choubine.github.io/">
                            <div className="linkstoapps">
                                <img className="gittohabbu" src="https://image.flaticon.com/icons/png/512/25/25231.png"/><p>Live Version</p>
                            </div>
                        </a>
                        <a href="https://github.com/lev-choubine/wangan-midnight">
                            <div className="linkstoapps">
                                <img className="gittohabbu" src="https://img.icons8.com/clouds/2x/github.png"/><p>GitHub Repo</p>
                            </div>
                        </a>
                    </div>
                </div>
            <div className="tsugi">
                <Link  to="/Famished" >Famished</Link> 
            </div>
            </div>
        </div>
    )
}

export default CrazyDriver;