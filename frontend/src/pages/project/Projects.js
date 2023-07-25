import './index.scss';
import simon from '../../assets/simon_says.png'
import group_project from '../../assets/group_project.png'
import mern_app from '../../assets/mern_app.png'
import cards from '../../assets/cards.png'
import Loader from 'react-loaders';

const Projects = () => {
    return (
      <>
        <div className="home">
          <h1>Projects</h1>
          <p>
            Here are some of the projects I've created, feel free to take a look. If you'd like to see some of the source code its up on my GitHub.
          </p>
        </div>
        <div className = 'home cardcontainer'>

          <div className = 'card'>
            <img src = {simon} alt='simon says'/>
            <div className='card-text'>
              <h4>Simon Game</h4>
              {/* <p>Skills</p> */}
            </div>
          </div>

          <div className = 'card'>
            <img src = {group_project} alt='simon says'/>
            <div className='card-text'>
              <h4>Group Projects</h4>
              {/* <p>Skills</p> */}
            </div>
          </div>

          <div className = 'card'>
            <img src = {mern_app} alt='group project'/>
            <div className='card-text'>
              <h4>MERN - Stack Application</h4>
              {/* <p>Skills</p> */}
            </div>
          </div>

          <div className = 'card'>
            <img src = {cards} alt='group project'/>
            <div className='card-text'>
              <h4>Cards Game Simulation</h4>
              <p></p>
            </div>
          </div>
        </div>
        <Loader type ='ball-rotate'/>
      </>
    )
}

export default Projects