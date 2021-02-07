import React from 'react';
import ReactPlayer from "react-player";

function Token () {
    return(
        <div>
            <div className="video_box">
        <div className="game_info">   
            <h3>Token</h3>
            <h5 className="lingo">#EJS, #Express, #Mongo, #Mongoose, #Node.js, #Sockets.io, #Cloudinary, #Passport, #React.js</h5>
            <h6>A dating application where the user can either swipe to the right to like their potential match or swipe left to keep searching. A swip to the right will trigger a chat with another user. The chat can only take place if another user accepts the invitation.</h6>
       
            <a  href="https://token-dates.herokuapp.com">
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
                url="https://res.cloudinary.com/dok4pz3i3/video/upload/v1612330016/yph9sdzwvieq1y8r9a1m.mp4"
                width="700px"
                height="auto"/>
            </div>
    </div> 
        </div>
    )
}

export default Token;