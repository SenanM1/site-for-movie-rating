import React from 'react';
import { useState } from 'react';
import './ContactMe.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactMe = () => {
  
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const notify = () => toast('Submitted Succesfully.');

  const submit = (e) => {
    e.preventDefault();

    let obj = {
      subject,
      email,
      message
    };

    fetch(" http://localhost:8000/data",{
      method:"POST",
      headers:{'content-type':'application/json'},
      body:JSON.stringify(obj)
    }).then(res => {
      toast.success('Submitted successfully.')
    }).catch((err)=>{
      toast.error('Error: ' + err);
    });
  }
  
  return (
    <div className='antialiased text-gray-900 '>
      <form className='px-4 my-32 max-w-3xl mx-auto space-y-6'>
              <div className="card-header">
                <h1 className='text-5xl font-semibold'>Contact Us</h1>
              </div>
  
              <div className='flex space-x-4'>
                <div className="w-1/2">
                    <label htmlFor="subject">Subject</label>
                    <input value={subject} onChange={(e) => setSubject(e.target.value)} className='border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-indigo-900 ' required type="text" name='subject' id='subject'/>
                </div>
                

                <div className="w-1/2">
                    <label htmlFor="email">E-mail</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className='border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-indigo-900 ' required type="email" name='email' id='email'/>
                </div>
              </div>

              <div className="message-part">
                  <label htmlFor="message">Your Message</label>
                  <textarea value={message} onChange={(e) => setMessage(e.target.value)} className='border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-indigo-900 ' required name='message' id='message' rows="4" cols="50"/>
              </div>
            

            <div className="card-footer">
              <button onClick={submit} type='submit' className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-gray-900 rounded-lg hover:bg-gray-800 focus:shadow-outline focus:outline-none'>Submit</button>
            </div>
          
      </form>

      <ToastContainer/>
    </div>
  )
}
export default ContactMe;
