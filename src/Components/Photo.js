
import { Link } from 'react-router-dom'

function Photo() {

  return(
     
    <div id="midHeader">
        <div id="photoBox">
          <div className="photoButtons" > 
            <a href="https://github.com/lev-choubine">
              <img className="gittohabbu" src="https://image.flaticon.com/icons/png/512/25/25231.png"/>
            </a>
            <a id="numba">917-294-7400</a>
            <li id="hommu" className="navLink homePage"  /*onClick={showProjects}*/>
              <Link to="/">HOME</Link>
            </li>
          </div>
          <div>
            <img  src='https://avatars0.githubusercontent.com/u/68445801?v=4' id="pic"/>
          </div>
          <div className="photoButtons">
            <li class="navLink" /*onClick={hideProjects}*/>
              <Link to="/Resume">RESUME</Link>
            </li>
            {/* <li class="navLink" /*onClick={hideProjects}>
              <Link to="/Kanji">MY INTERESTS</Link>
            </li> */}
            <a href="https://www.linkedin.com/in/lev-choubine/"><img className="gittohabbu" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/1200px-Linkedin_icon.svg.png"/>
             <a href="mailto:lev.choubine@gmail.com"><img id="mail" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/TK_email_icon.svg/480px-TK_email_icon.svg.png"/></a>
            </a>
          </div>
        </div>
          <h6 id="speil">Full stack developer based in New York City. <br/>Graduated from General Assembly's Software Engineering Immersive program.</h6>
     
    </div>
  );
}
  
  export default Photo;

  
