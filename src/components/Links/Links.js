import { FaPortrait, FaGithub } from "react-icons/fa";
import './Links.css'

function Links() {
    return (
        <div className="links">
            <a href="https://krzysztof-szymek-portfolio.netlify.app/">
                <div className='icon'>
                    <FaPortrait size={30}/>
                </div>
                <div className='text'> <big>Portfolio</big></div>
            </a>
            <a href="https://github.com/krzysztofszymek/airport">
                <div className='icon'>
                    <FaGithub size={30}/>
                </div>
                <div className='text'> <big>GitHub</big></div>
            </a>
        </div>
    );
}

export default Links;