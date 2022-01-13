import {ReactComponent as GithubIcon} from 'assets/img/github.svg';
import './styles.css';
function Navbar() {

    return(

        <header>
     <nav className="container">
       <div className="Dsmovie-nav-content">
         <h1>Dsmovie</h1>
           <a href="https://github.com/barroso3b">
             <div>
                <GithubIcon />
                <p>/barroso3b</p>
             </div>
           </a>
         </div>
      
       </nav>
   </header>

    );
}
export default Navbar;
