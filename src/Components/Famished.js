import React from 'react';
import ReactPlayer from "react-player";

function Famished () {
    return(
        <div className="lowerBody">
            <div className="video_box">
                <div className="game_info">   
                    <h3>Famished</h3>
                    <h5 className="lingo">#EJS, #Express, #SQL, #Sequelize, #Node.js, #GoogleMatrixDistanceAPI, #Cloudinary, #Passport</h5>
                    <h6>A multi-profile search engine that allows users and mobile vendors connect with eachother based on proximity. The apllication filters out user's desired food items, matches them against the offers by sellers and returns options based on est price and proximity! Have fun - you can use '420St Nicholas Ave New York, NY, 10027' as your default addresss if you want to test the lice application out.</h6>
                    <div className="linksu">
                        <a  href="https://famished.herokuapp.com/">
                            <div className="linkstoapps">
                                <img className="gittohabbu" src="https://cdn.iconscout.com/icon/free/png-512/heroku-6-599422.png"/><p>Live Version</p>
                            </div>
                        </a>
                        <a  href="https://github.com/lev-choubine/famished">
                            <div className="linkstoapps">
                                <img className="gittohabbu" src="https://image.flaticon.com/icons/png/512/25/25231.png"/><p>GitHub Repo</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="videoBox">
                    <ReactPlayer 
                    playing={true}
                    controls={true}
                    loop={true}
                    url="https://res.cloudinary.com/dok4pz3i3/video/upload/v1610911433/xzdvof4wywepqwgoex4u.mp4"
                    width="700px"
                    height="auto"/>
                </div>
            </div> 
        </div>
    )
}

export default Famished;