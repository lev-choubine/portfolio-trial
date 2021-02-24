import {Link} from 'react-router-dom'

function Languages(){
    return(
        <div id="languages">
            <div>
            <Link to="/CrazyDriver">
                <img className="go" src="https://www.clipartmax.com/png/middle/470-4707396_javascript-icon-html-css-js-icons.png"/>  
                <li><p className="mobileLang">javaScript</p></li>
            </Link>
            </div>
            <div>
            <Link to="/Famished">
                <img className="go" src="https://icon-library.com/images/node-icon/node-icon-28.jpg"/>
                <li><p className="mobileLang">Node.js</p></li>
            </Link>
            </div>
            
            <div>
            <Link to="/Token">
                <img className="go" src="https://icon-library.com/images/react-icon/react-icon-29.jpg"/>
                <li><p className="mobileLang">React.js</p></li>
            </Link>
            </div>
            <div>
            <Link to="/Famished">
                <img className="go"src="https://kalvanaveen.github.io/WebDevelopmentResources.github.io/Images/Express-JS-min.png"/>
                <li><p className="mobileLang">Express</p></li>
            </Link>
            </div>
            <div>
                <Link to="/">
                <img className="go" src="https://icon-library.com/images/django-icon/django-icon-0.jpg"/>
                <li><p className="mobileLang">Django</p></li>
                </Link>
            </div>
            <div>
                <Link to="/">
                <img className="go" src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png"/>
                <li><p className="mobileLang">Python</p></li>
                </Link>
            </div>
            <div>
                <Link to="/Famished">
                <img className="go" src="https://camo.githubusercontent.com/bec2c92468d081617cb3145a8f3d8103e268bca400f6169c3a68dc66e05c971e/68747470733a2f2f76352e676574626f6f7473747261702e636f6d2f646f63732f352e302f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67"/>
                <li><p className="mobileLang">Bootstrap</p></li>
                </Link>
            </div>
            <div>
                <Link to="/Famished">
                <img className="go" src="https://cdn0.iconfinder.com/data/icons/superuser-extension-light/512/675277-data_database_sql_query-512.png" />
                <li><p className="mobileLang">SQL</p></li>
                </Link>
            </div>
            <div>
                <Link to="TabSensei" >
                <img className="go" src="https://img.icons8.com/color/452/mongodb.png"/>
                <li><p className="mobileLang">MongoDB</p></li>
                </Link>
                </div>
            <div>
                <Link to="/Famished">
                <img className="go" src="https://cdn.iconscout.com/icon/free/png-512/sequelize-1175001.png"/>
                <li><p className="mobileLang">Sequelize</p></li>
                </Link>
                </div>
            <div>
                <Link to="Token" >
                <img className="go" src="https://miro.medium.com/max/3196/1*4E0JF4BkB4lkJrf8G30qlg.png"/>
                <li><p className="mobileLang">Mongoose</p></li>
                </Link>
            </div>
        </div>
    )
}

export default Languages;