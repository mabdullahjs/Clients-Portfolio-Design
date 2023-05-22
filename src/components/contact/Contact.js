import React, { useState } from "react";
import { Button, Container, Spinner } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { sendData } from "../../Assets/config/firebase/firebaseMethods";

function Contact() {
  //states
  const [btn, setBtn] = useState('Send Message');
  const [names, setNames] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  //sendVal to database
  const sendDataToDB = () => {
    setBtn(<Spinner animation="border" />);

    if (names.trim() === '' || email.trim() === '' || message.trim() === '') {
      setBtn('Send Message')
      setError('Please Fill the form correctly!')
      setTimeout(() => {
        setError('')
      }, 2000)
    }
    else {
      sendData({
        name: names,
        email: email,
        message: message
      }, 'UserInfo')
        .then(() => {
          setBtn('Send Message')
          setError('Message send Successfully!')
          setTimeout(() => {
            setError('')
          }, 2000)
          setMessage('');
          setEmail('');
          setNames('');
        })
    }
  }
  return (
    <>
      <section>
        <Container fluid id="home">
          <Container className="home-content">
            <h1 className="text-center">GET IN TOUCH</h1>
            <h5 className="text-center">I would like to know the final requirements of your project. Please get in touch with me and share details about your project.</h5>
            <div>
              <Form.Control
                placeholder="Name"
                style={{ margin: '0 auto' }}
                className="w-50 mt-5"
                onChange={(e) => setNames(e.target.value)}
                value={names}
              />
              <Form.Control
                placeholder="Email"
                type="email"
                style={{ margin: '0 auto' }}
                className="w-50 mt-3"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ margin: '0 auto', height: '10rem ' }}
                className="w-50 mt-3"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
              <div className="text-center">
                {/* <Button className='mt-5'><Spinner animation="border" /></Button> */}
                <Button onClick={sendDataToDB} className='mt-5'>{btn}</Button>
                <p className="mt-5">{error}</p>
              </div>
            </div>
          </Container>
        </Container>
      </section>
    </>
  );
}

export default Contact;
