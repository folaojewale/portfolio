import './index.scss';
import CV from '../../cv.pdf';
import {
  faNodeJs,
  faCss3,
  faGithub,
  faHtml5,
  faBootstrap,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders';

const About = () => {
    return (
      <>
        <div className="home">
          <h1>About Me</h1>
          <p>
              I'm a 3rd Year student studying Computer Science and Software Engineering at Maynooth University in Kildare. I have a strong interest in working in the Web Development field in particular.
              I've finished my second year and I'm looking for internships in the summer and as well as for my second semester for the year of 2024
          </p>
          <p>
              I like to create and learn things in my spare time. I always have ideas of projects that I'd like to do or trying new frameworks
          </p>
          <p>
              Some of my hobbies include gaming and athletics. If you'd like to see more I have left my CV down below
          </p>
          <a href={CV} target='_blank' rel="noreferrer" className='uni-button'>MY CV</a>
        

          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faNodeJs} color="#DD0031" />
              </div>

              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>

              <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>

              <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>

              <div className="face5">
                <FontAwesomeIcon icon={faBootstrap} color="#EFD81D" />
              </div>

              <div className="face6">
                <FontAwesomeIcon icon={faGithub} color="#EC4D28" />
              </div>

            </div>
          </div>
        </div>
        <Loader type ='ball-rotate'/>
      </>
    )
}

export default About