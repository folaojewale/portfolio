import './index.scss';
import simon from '../../assets/simon_says.png'
import group_project from '../../assets/group_project.png'
import crud from '../../assets/crud_app.png'
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
              <p>Skills</p>
            </div>
          </div>

          <div className = 'card'>
            <img src = {group_project} alt='simon says'/>
            <div className='card-text'>
              <h4>Group Projects</h4>
              <p>Skills</p>
            </div>
          </div>

          <div className = 'card'>
            <img src = {crud} alt='group project'/>
            <div className='card-text'>
              <h4>Group Project</h4>
              <p>Skills</p>
            </div>
          </div>

          <div className = 'card'>
            <img src = {crud} alt='group project'/>
            <div className='card-text'>
              <h4>Group Project</h4>
              <p>Skills</p>
            </div>
          </div>
        </div>
        <Loader type ='ball-rotate'/>
      </>
    )
}

export default Projects