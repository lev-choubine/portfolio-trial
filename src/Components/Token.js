import React from 'react';
import ReactPlayer from "react-player";
import { BrowserRouter, Link } from 'react-router-dom';

function Token () {
    return(
        <div className="lowerBody">
             <div id="kanjiParent">
            <div className="tsugi">
                <Link  to="/TabSensei">TabSensei</Link> 
            </div>
            <div className="video_box">
                <div className="game_info">   
                    <h3 className="projectHeader">Token</h3>
                </div>
                <div className="videoBox">
                    <div className="videoParent">
                        <ReactPlayer 
                        playing={true}
                        controls={true}
                        loop={true}
                        url="https://res.cloudinary.com/dok4pz3i3/video/upload/v1612330016/yph9sdzwvieq1y8r9a1m.mp4"
                        width="700px"
                        height="auto"/>
                    </div>
                </div>
                <h5 className="lingo">#EJS, #Express, #Mongo, #Mongoose, #Node.js, #Sockets.io, #Cloudinary, #Passport, #React.js</h5>
                <div>
                    <h6 className="projectDescription">A dating application where the user can either swipe to the right to like their potential match or swipe left to keep searching. A swip to the right will trigger a chat with another user. The chat can only take place if another user accepts the invitation.</h6>
                </div>
                <div className="linksu">
                        <a href="https://token-dates.herokuapp.com">
                            <div className="linkstoapps">
                                <img className="gittohabbu" src="https://cdn.iconscout.com/icon/free/png-512/heroku-6-599422.png"/><p>Live Version</p>
                            </div>
                        </a>
                        <a href="https://github.com/lev-choubine/SEI-project4-frontend">
                            <div className="linkstoapps">
                                <img className="gittohabbu" src="https://img.icons8.com/clouds/2x/github.png"/><p>Frontend Repo</p>
                            </div>
                        </a>
                        <a href="https://github.com/lev-choubine/SEI-project4-backend">
                            <div className="linkstoapps">
                                <img className="gittohabbu" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/2b14985a-c66e-4dbd-b09c-609fe0678dae/d5ariic-ff63c049-4a2e-46bb-bae5-a420d50a4e54.png"/><p>Backend Repo</p>
                            </div>
                        </a>
                    </div>
            </div> 
            <div className="tsugi">
                <Link  to="/">Kanji</Link> 
            </div>
            </div>
        </div>
    )
}

export default Token;