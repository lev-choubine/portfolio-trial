import { Link } from 'react-router-dom'

function Nav() {
  function hideProjects(){
    document.querySelector('#projects').style.display="none"
  }
  function showProjects(){
    document.querySelector('#projects').style.display="block"
  }
    return (
      <nav>
       <ul id="links">
         <li class="navLink" onClick={showProjects}><Link to="/">Projects</Link></li>
         <li class="navLink" onClick={hideProjects}><Link to="/Resume">Resume</Link></li>
         {/* <li class="navLink"><Link to="/Git">My work</Link></li> */}
       </ul>
      </nav>
    );
  }
  
  export default Nav;