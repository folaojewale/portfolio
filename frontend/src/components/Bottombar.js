import{
    faGithub,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer  = () =>{
    return(
        <footer>
        <div className="icons">
            <a href='https://www.linkedin.com/in/fola-ojewale-9060a8217/' target='_blank' rel="noreferrer" >
                <FontAwesomeIcon icon={faLinkedin} className='icon'/>
            </a>
            <a href='https://github.com/folaojewale' target='_blank' rel="noreferrer" >
                <FontAwesomeIcon icon={faGithub} className='icon'/>
            </a>
        </div>
        </footer>
    )
}

export default Footer 