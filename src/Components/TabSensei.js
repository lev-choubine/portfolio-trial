import React from 'react';
import ReactPlayer from "react-player";

function TabSensei () {
    return(
        <div>
            <div className="video_box">
        <div className="game_info">   
            <h3>Tab Sensei(click here for GitHub)</h3>
            <h5 className="lingo">#React.js, #Express, #MongoDB, #Mongoose, #Node.js, #YoutubeAPI, #SongsterrAPI, #Cloudinary, #Passport</h5>
            <h6>A search engine application that lets the user pull up guitar tabs and youTube tutorials for desired songs. The user is able to store or delete the preferred tabs, comment on the tabs and delete tabs. The pallication comes with a bank of 6  metronome beats. You can manipulate playback speed in realtime.</h6>
       
            <a  href='http://tabsensei.herokuapp.com/'>
                <div className="linkstoapps">
                     <img className="gittohabbu" src="https://cdn.iconscout.com/icon/free/png-512/heroku-6-599422.png"/><p>Live Version</p>
                </div>
            </a>
        </div>
            <div className="videoBox">
                <ReactPlayer 
                playing={true}
                controls={true}
                loop={true}
                url="https://res.cloudinary.com/dok4pz3i3/video/upload/v1610911373/bkzo3hrldtxf16oj8w8g.mp4"
                width="700px"
                height="auto"/>
            </div>
    </div> 
        </div>
    )
}

export default TabSensei;