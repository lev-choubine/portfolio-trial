
import Contact from './Contact'
import { Link } from 'react-router-dom'
import React, {useEffect} from 'react'

function Photo() {
  function showProjects(){
    document.querySelector('#projects').style.display="block"
  }

    function hideProjects(){
      document.querySelector('#projects').style.display="none"
    }
   

  
  
      return(
     
        <div id="midHeader">
      <Contact /> 
        <div id="photoBox">
        <div className="photoButtons" > <a href="https://github.com/lev-choubine"><img className="gittohabbu" src="https://image.flaticon.com/icons/png/512/25/25231.png"/></a>
        <li id="hommu" className="navLink homePage"  onClick={showProjects}><Link to="/">HOME</Link></li>
        </div>
        <div>
        <img  src='https://avatars0.githubusercontent.com/u/68445801?v=4' id="pic" />
        </div>
         <div className="photoButtons">
         <li class="navLink" onClick={hideProjects}><Link to="/Resume">RESUME</Link></li>
        
           <a href="https://www.linkedin.com/in/lev-choubine/"><img className="gittohabbu" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/1200px-Linkedin_icon.svg.png"/></a>
        
           </div>
        </div>
        <h6 id="speil">Full stack developer. <br/>Graduated from General Assembly's Software Engineering Immersive program.</h6>
      </div>
    
    );
  }
  
  export default Photo;

  
