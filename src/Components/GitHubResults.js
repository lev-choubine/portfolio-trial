import React from 'react'

function GitHubResults (props) {
    return(
        <div>
            <h4>User {props.github.name}</h4>
            <h4>{props.github.login}</h4>
            <h4>{props.github.location}</h4>
            <h4>{props.github.bio}</h4>
            
        </div>
    )
}

export default GitHubResults ;