import { BrowserRouter, Route, Link } from 'react-router-dom';


function Git(props) {
  
    const procedureItems = props.proceduresList.map((p)=>{
        return <li><Link to={`/Works/${p.id}`}>{p.Name}</Link></li>
    })
    return(
        <div>
            {procedureItems}
        </div>
    )
  }
  
  export default Git;