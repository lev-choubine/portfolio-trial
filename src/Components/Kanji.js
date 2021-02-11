import { useState, useEffect} from 'react';
import Axios from 'axios'
import * as React from 'react';

// import { View } from 'react-native';
// import { RadioButton } from 'react-native-paper';

function Kanji() {
    const [kanjiLookUp, setKanjiLookUp]= useState("")
    const [kanjiResult, setKanjiResult]= useState("")
    const [mode, setMode]=useState("kanji")

    function getKanji(e){
       
        setMode("kanji")
    }
    function getEnglish(e){
     
        setMode("english")
    }

    function makeRequest(){
        if(kanjiLookUp===""){
            return
        }
        setKanjiResult("")
        console.log(kanjiLookUp)
        Axios.get(`https://kanji-cors-bypass.herokuapp.com/api/${kanjiLookUp}`).then(res=>{
        console.log(res.data)
        setKanjiResult(res.data)})
        .catch(err=>{console.log(err)})
    
    }
// useEffect=(()=>{
   
// },[])
    return(
        <div id="kanjiParent">
            {mode==="kanji"?
            <p id="kanji">
                {kanjiResult ? 
                    kanjiResult[0].slug
                    : ""}
            </p>:
            <p id="english">  {kanjiResult ? kanjiResult[0].senses[0].english_definitions[0]: "" }</p>
            }
            <form id="searchBar" onSubmit={e=>{e.target.reset(); e.preventDefault(); setKanjiLookUp('')}}>
                <input id="inputKanji" type="text" placeholder="Enter a word" onChange={(e=>{setKanjiLookUp(e.target.value)})}></input>
                <br></br>
                <button id="comment" onClick={makeRequest}>Send</button> 
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
    )
}

export default Kanji;