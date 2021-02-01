import Nav from './Nav'
import Contact from './Contact'

function Photo() {

  
      return(
     
        <div id="midHeader">
      <Contact /> 
        <div id="photoBox">
        <h5 ><a href="https://github.com/lev-choubine"><img className="gittohabbu" src="https://image.flaticon.com/icons/png/512/25/25231.png"/></a></h5>
        <img id="pic" src='https://avatars0.githubusercontent.com/u/68445801?v=4'/>
         <h5><a href="https://www.linkedin.com/in/lev-choubine/"><img className="gittohabbu" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/1200px-Linkedin_icon.svg.png"/></a></h5>
        
        </div>
        <h6>Full stack developer. <br/>Graduated from General Assembly's Software Engineering Immersive program.</h6>
        <Nav />
      </div>
    
    );
  }
  
  export default Photo;

  
