import React from 'react';
import './ContactMe.css';

const ContactMe = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault();
    
    setFormStatus('Sent');

    const { subject, email, message } = e.target.elements;
    let fetched_info = {
      subject: subject.value,
      email: email.value,
      message: message.value,
    };
  
    console.log(fetched_info)
  }
  return (
    
    <div className="container mt-5">
      <h2 className="title">Contact the Team</h2>
      <div class id="left-box"></div>
      <div class id="box" style={{background: "grey"}}>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <input className="form-control" type="text" placeholder="Subject" id="subject"/>
        </div>
        <div className="mb-3">
          <input className="form-control" type="email" placeholder="Your Email" id="email" required />
        </div>
        <div className="mb-3">
          <textarea className="form-control" placeholder="Your message..." id="message" required />
        </div>
        <button className="btn" type="submit">
          {formStatus}
        </button>
      </form>
      </div>
    </div>
  )
}
export default ContactMe
