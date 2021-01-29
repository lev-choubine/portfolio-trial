import { Link } from 'react-router-dom'

function Nav() {
    return (
      <div className="App">
       <ul id="links">
         <li class="navLink"><Link to="/">Home</Link></li>
         <li class="navLink"><Link to="/Resume">Resume</Link></li>
         <li class="navLink"><Link to="/Git">My work</Link></li>
       </ul>
      </div>
    );
  }
  
  export default Nav;