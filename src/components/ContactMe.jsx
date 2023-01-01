import React from 'react';

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
    <nav>
    <ul>
        <span><a href='#'>Movie Rating Site</a></span>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>Movies</a></li>
        <li><a href='#'>Contact Us</a></li>
    </ul>
</nav> 

      <h2 className="mb-3">Contact the Team</h2>
      <div class id="left-box"></div>
      <div class id="box" style={{background: "grey", padding: "20px"}}>
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
        <button className="btn btn-danger" type="submit">
          {formStatus}
        </button>
      </form>
      </div>
    </div>
  )
}
export default ContactMe
