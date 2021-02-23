import React from 'react';
import ReactPlayer from "react-player";
import { Link } from 'react-router-dom';

function CrazyDriver () {
    return(
        <div className="lowerBody">
             <div id="kanjiParent">
            <div className="tsugi">
                <div id="wrapper4">
                <Link  to="/"><img className="arrow" src="https://www.behold3d.me/wp-content/uploads/2014/06/006765-3d-transparent-glass-icon-arrows-arrowhead2-left.png"/></Link> 
                <p className="text4">Kanji</p>
                </div>
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
                <div id="wrapper3">
                <Link  to="/Famished" ><img className="arrow" src="https://i.pinimg.com/originals/48/42/69/4842692663748510546c07917e2daaed.png" /></Link> 
            </div>
            </div>
            <p className="text1">Famished</p>
            </div>
        </div>
    )
}

export default CrazyDriver;