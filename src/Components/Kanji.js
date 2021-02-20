import { BrowserRouter, Link } from 'react-router-dom';
import { useState, useEffect} from 'react';
import Axios from 'axios'
import * as wanakana from 'wanakana';


// import { View } from 'react-native';
// import { RadioButton } from 'react-native-paper';

function Kanji() {
    
    const [kanjiLookUp, setKanjiLookUp]= useState("")
    const [kanjiResult, setKanjiResult]= useState("")
    const [mode, setMode]=useState("kanji")

    function typeKana(e){
        if(mode==="kanji"){
            setKanjiLookUp(e.target.value)
            document.getElementById("fakeinput").style.visibility="hidden"
           
        }else{
            setKanjiLookUp(wanakana.toKana(e.target.value))
            document.getElementById("fakeinput").style.visibility="visible"
           
        }
    }

    function getKanji(e){
        setMode("kanji")
        document.getElementById("fakeinput").style.visibility="hidden"
        setKanjiLookUp("")
        setKanjiResult("")
    }
    function getEnglish(e){
     
        setMode("english")
        setKanjiLookUp(wanakana.toKana(kanjiLookUp))
        document.getElementById("fakeinput").style.visibility="visible"
        setKanjiLookUp("")
        setKanjiResult("")
    }

    function makeRequest(){
        if(kanjiLookUp===""){
            return
        }
        setKanjiResult("")
        console.log(kanjiLookUp)
        Axios.get(`https://kanji-cors-bypass.herokuapp.com/api/${kanjiLookUp}`).then(res=>{
        console.log(res.data)
        if(res.data.length===0){
            setKanjiResult([{slug: "˃̣̣⌓˂̣̣̥", senses:[{english_definitions:["no results were found"]}]}])
            return
        }
       
        setKanjiResult(res.data)
        if(res.data[0].slug.length===1){
            document.getElementById('kanji').style.fontSize="80px"
        }else if(res.data[0].slug.length===2){
            document.getElementById('kanji').style.fontSize="50px"
        }else if(res.data[0].slug.length===3){
            document.getElementById('kanji').style.fontSize="35px"
        }else{
            document.getElementById('kanji').style.fontSize="25px"
        }
     
        })
        .catch(err=>{console.log(err)})
    
    }
  
    return(
        <div id="kanjiParent">
            <div className="tsugi">
                <div id="wrapper2">
                <Link  to="/Token"> <img className="arrow" src="https://www.behold3d.me/wp-content/uploads/2014/06/006765-3d-transparent-glass-icon-arrows-arrowhead2-left.png"/> </Link> 
                <p className="text2">Token</p>
                </div>
            </div>
            <div>
            <div id="kanjiApp">
            {mode==="kanji"?
            <div className="upperBody">
                <div>
                <p id="kanji">
                    {kanjiResult ? 
                        kanjiResult[0].slug
                        : ""}
                </p>
                </div>
                <div>
                <p id="reading">   
                {kanjiResult ? 
                    kanjiResult[0].japanese[0].reading                    
                    : ""}
                </p>
                </div>
            </div>
            :
            <div className="upperBody">
            <p id="english">  {kanjiResult ? 
            kanjiResult[0].senses[0].english_definitions[0]
            
            : "" }</p>
            <p id="kanji">  {kanjiResult ? 
            kanjiResult[0].slug
            
            : "" }</p>
            
         
            </div>
            }
            <div id="lowerBody">
            <form id="searchBar" onSubmit={e=>{e.target.reset(); e.preventDefault(); setKanjiLookUp('')}}>
                <div id="fakeinput">
                    <p >{kanjiLookUp}</p>
                </div>
                <input id="inputKanji" type="text" placeholder="Enter a word" onChange={typeKana}></input>
                
                <br></br>
                <button id="searchButton" onClick={makeRequest}>
                <img src="https://img.pngio.com/white-magnifying-glass-3-icon-free-white-magnifying-glass-icons-white-magnifying-glass-png-256_256.png" id="comment" />
                </button>
            </form>
            <div id="choice">
                <form>
                <label>Get Kanji</label>
                <input  type="radio" name="kanji" value="kanji" onClick={getKanji}></input>
                <label>Get Englsih</label>
                <input type="radio" name="kanji" value="english" onClick={getEnglish} ></input>
                </form>
            </div>
            </div>
            </div>
            <h5 id="intro">
                I got really insterested in Japanese language during the pandemic. It's no easy task and I am sure those who study Japanese - will agree that learning Kanji is one of the most difficult things about the language. You always have to look them up....<br/> 
                I built out a little converter that will help you look up definitions of Kanji or find a Kanji based on the English word you enter.
                This frontend is written in react while the API request is fulfilled through a backend application written in Django. Please give it some time for your first API request. The back end is deployed to heroku and needs at least 30 seconds to reanimate itself.
            </h5>
            </div>
            <div className="tsugi">
                <div id="wrapper1">
                <Link  to="/CrazyDriver"> <img className="arrow" src="https://i.pinimg.com/originals/48/42/69/4842692663748510546c07917e2daaed.png" />  </Link> 
                <p className="text1">
                Wangan Midnight
                </p>
                </div>
            </div>
        </div>
    )
}

export default Kanji;