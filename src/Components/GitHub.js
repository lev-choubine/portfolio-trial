import React from 'react'
import { useState} from 'react';
import GitHubResults from './GitHubResults'
import axios from 'axios';

function GitHub () {
    const [username, setUsername] = useState('');
    const [github, setGithub] = useState(null);
    const handleSubmit = (e) => {
       e.preventDefault()
      let url = `https://api.github.com/users/${username}`
       axios.get(url)
       .then(result => {
           setGithub(result.data)
       }).catch((err)=>{console.log(err)});
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Find a GitHub profile</h1>
                {github ? <GitHubResults github={github} /> :null }
                <label htmlFor="username">Name</label>
                <input type="text" name="username" id="username" onChange={(e => setUsername(e.target.value))} />
                <input type="submit" value="findGitHub" /> 
            </form>


        </div>
    )
}

export default GitHub;