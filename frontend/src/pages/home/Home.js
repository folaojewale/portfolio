import './index.scss'
import Loader from 'react-loaders';

const Home = () => {
    return (
      <>
        <div className="home">
          <h1>Home</h1>
          <p><strong>Greetings, my name is Fola, A software developer</strong></p>
          <p>Computer Science and Software Engineering Student at Maynooth University</p>
          <u><h2>Skills</h2></u>
        </div>
        <div className = 'home container-skill'>

          <div class="skills">
            <strong>Programming Languages</strong> 
            <div class="details">
              <span>Java, C, Python</span>
            </div>
            <div class="bar">
                <div id="pl-bar"></div>
            </div>
          </div>

          <div class="skills">
          <strong>Web Development</strong> 
                <div class="details">
                    <span>Javascript, CSS, HTML, Bootstrap, NodeJS, ReactJS</span>
                </div>
                <div class="bar">
                    <div id="wb-bar"></div>
                </div>
          </div>

          <div class="skills">
          <strong>Database Management</strong> 
                <div class="details">
                    <span>SQL, MySQL, Mongodb</span>
                </div>
                <div class="bar">
                    <div id="dm-bar"></div>
                </div>
          </div>

          <div class="skills">
          <strong>Fundamentals of Software Development</strong> 
                <div class="details">
                    <span>Data Structures and Algorithms, Problem Solving, Software Testing, Software Engineering Processes</span>
                </div>
                <div class="bar">
                    <div id="fsd-bar"></div>
                </div>
          </div>

        </div>
        <br></br>
        <u><h2 className='home' >Web Development Tools</h2></u>
        <div className = 'home container-skill'>
          <div class="skills">
          <strong>Web Development</strong>
            <div class="details">
              <span>Visual Studio Code, Postmand and Insomnia</span>
            </div>
            <div class="bar">
                <div id="pl-bar"></div>
            </div>
          </div>

          <div class="skills">
                <div class="details">
                    <span>Eclipse, StarUML</span>
                </div>
                <div class="bar">
                    <div id="wb-bar"></div>
                </div>
          </div>

          <div class="skills">
                <div class="details">
                    <span>ReactJS, ExpressJS, Selenium</span>
                </div>
                <div class="bar">
                    <div id="dm-bar"></div>
                </div>
          </div>
        </div>
        <Loader type ='ball-rotate'/>
      </>
    )
}

export default Home