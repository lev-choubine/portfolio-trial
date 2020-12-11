import { Link } from 'react-router-dom'

function Nav() {
    return (
      <div className="App">
       <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/Contact">Contact</Link></li>
      <li><Link to="/Resume">Resume</Link></li>
      <li><Link to="/Git">My work</Link></li>
      <li><Link to="/Weather">Weather</Link></li>
      <li><Link to="/GitHub">GitHub</Link></li>
    
    </ul>
      </div>
    );
  }
  
  export default Nav;