import './index.scss';
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import Loader from 'react-loaders';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then(
        () => {
          alert('Message successfully sent!')
          navigate('')
          form.current.reset()
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

    return (
      <>
        <div className="home">
          <h1>Contact me</h1>
          <p>
          I'm always open to new opportunities, particularly in full-stack development. Feel free to reach out for a chat using the form below!
          </p>
          <div className="contact-form">
              <form ref={form} onSubmit={sendEmail}>
                  <ul>
                      <li className="half"><input type="text" name="from_name" placeholder="Name" required/></li>

                      <li className="half"><input type="email" name="from_email" placeholder="someone@example.com" required/></li>

                      <li><input type="text" name="subject" placeholder="Subject" required/></li>

                      <li><textarea name='message' placeholder="Message" required/></li>
                      
                      <li><input type="submit" className='uni-button' value='SEND'/></li>
                  </ul>
              </form>
          </div>
        </div>
        <Loader type ='ball-rotate'/>
      </>
    )
}

export default Contact