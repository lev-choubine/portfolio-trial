import { BrowserRouter, Route, Link } from 'react-router-dom';

function Works(props) {
  
    return(
        <div>
          <h1>{props.procedure.Name}</h1>
          <a href={props.procedure.link}><h1>{props.procedure.link}</h1></a>
        </div>    
    )
    }
  
  export default Works;