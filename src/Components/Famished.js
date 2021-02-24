import React from 'react';
import ReactPlayer from "react-player";
import { BrowserRouter, Link } from 'react-router-dom';

function Famished () {
    return(
        <div className="lowerBody">
            <div id="kanjiParent">
                <div className="tsugi">
                <div id="wrapper5">
                    <Link  to="/CrazyDriver"> <img className="arrow" src="https://www.behold3d.me/wp-content/uploads/2014/06/006765-3d-transparent-glass-icon-arrows-arrowhead2-left.png"/></Link> 
                <p className="text5">Wangan Midnight</p>
                </div>
                </div>
            <div className="video_box">
                <div className="game_info">   
                    <h3 className="projectHeader">Famished</h3>
                </div> 
                <div className="videoBox">
                    <div className="videoParent">
                        <ReactPlayer 
                        playing={true}
                        controls={true}
                        loop={true}
                        url="https://res.cloudinary.com/dok4pz3i3/video/upload/v1610911433/xzdvof4wywepqwgoex4u.mp4"
                        width="700px"
                        height="auto"/>
                    </div>
                </div>
                <h5 className="lingo">#EJS, #Express, #SQL, #Sequelize, #Node.js, #GoogleMatrixDistanceAPI, #Cloudinary, #Passport
                </h5>
                <div>
                    <h6 className="projectDescription">A multi-profile search engine that allows users and mobile vendors connect with eachother based on proximity. The apllication filters out user's desired food items, matches them against the offers by sellers and returns options based on est price and proximity! Have fun - you can use '420St Nicholas Ave New York, NY, 10027' as your default addresss if you want to test the application out.</h6>
                </div>
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
                <div className="tsugi">
                    <div id="wrapper6">
                    <Link  to="/TabSensei"><img className="arrow" src="https://i.pinimg.com/originals/48/42/69/4842692663748510546c07917e2daaed.png" /></Link> 
                    <p className="text6">TabSensei</p>
                </div>
                </div>
                </div>
        </div>
    )
}

export default Famished;