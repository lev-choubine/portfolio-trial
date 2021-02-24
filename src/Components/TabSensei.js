import React from 'react';
import ReactPlayer from "react-player";
import { BrowserRouter, Link } from 'react-router-dom';

function TabSensei () {
    return(
        <div className="lowerBody">
         <div id="kanjiParent">  
         <div className="tsugi">
                <div id="wrapper7">
                <Link  to="/Famished"> <img className="arrow" src="https://www.behold3d.me/wp-content/uploads/2014/06/006765-3d-transparent-glass-icon-arrows-arrowhead2-left.png"/></Link> 
                <p className="text7">Famished</p>
                </div>
            </div> 
            <div className="video_box">
                <div className="game_info">  
                    <h3 className="projectHeader">Tab Sensei</h3>
                </div>
                <div className="videoBox">
                    <div className="videoParent">
                        <ReactPlayer 
                        playing={true}
                        controls={true}
                        loop={true}
                        url="https://res.cloudinary.com/dok4pz3i3/video/upload/v1610911373/bkzo3hrldtxf16oj8w8g.mp4"
                        width="100%"
                        eight="auto"/>
                    </div>
                </div> 
                    <h5 className="lingo">#React.js, #Express, #MongoDB, #Mongoose, #Node.js, #YoutubeAPI, #SongsterrAPI, #Cloudinary, #Passport</h5>
                    <div> 
                        <h6 className="projectDescription">A search engine application that lets the user pull up guitar tabs and youTube tutorials for desired songs. The user is able to store or delete the preferred tabs, comment on the tabs and delete tabs. The pallication comes with a bank of 6  metronome beats. You can manipulate playback speed in realtime.</h6>
                    </div>
                    <div className="linksu">
                         <a  href='http://tabsensei.herokuapp.com/'>
                             <div className="linkstoapps">
                                <img className="gittohabbu" src="https://cdn.iconscout.com/icon/free/png-512/heroku-6-599422.png"/><p>Live Version</p>
                            </div>
                        </a>
                        <a  href='https://github.com/lev-choubine/tab-sensei-frontend-group-project'>
                            <div className="linkstoapps">
                                <img className="gittohabbu" src="https://img.icons8.com/clouds/2x/github.png"/><p>Frontend Repo</p>
                            </div>
                        </a>
                        <a  href='https://github.com/lev-choubine/tab-sensei-backend'>
                            <div className="linkstoapps">
                                <img className="gittohabbu" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/2b14985a-c66e-4dbd-b09c-609fe0678dae/d5ariic-ff63c049-4a2e-46bb-bae5-a420d50a4e54.png"/><p>Backend Repo</p>
                            </div>
                        </a>
                    </div>
            </div> 
            <div className="tsugi">
                <div id="wrapper8">
                <Link  to="/Token"><img className="arrow" src="https://i.pinimg.com/originals/48/42/69/4842692663748510546c07917e2daaed.png" /></Link> 
                <p className="text8">Token</p>
                </div>
            </div> 
            </div> 
        </div>
    )
}

export default TabSensei;