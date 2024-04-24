
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

export const ContactUs = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_n5snn9s', 'template_es9aok2', form.current, {
          publicKey: 'EHRaIfRWo3SRrHxiy',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            e.target.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  
    return (
        <div className='card col-md-2 offset-md-3 offset-md-4' style={{height:'450px',width:"400px",marginTop:"100px",backgroundColor:'#FCFCFC'}}>
            <div className='card-body'>
            <form ref={form} onSubmit={sendEmail} style={{display:'flex',alignItems:'flex-start',flexDirection:'column',width:"100%",fontSize:'22px'}}>
             
                <label className='form-label text-dark'>Name</label>
                <input type="text" name="user_name" />
                <label className='form-label text-dark'>Email</label>
                <input type="email" name="user_email" />
                <label className='form-label text-dark'>Message</label>
                <textarea name="message" />

                <div style={{marginTop:'10px'}}>
                    <input type="submit" className='btn btn-danger mt-3' value="Send" />
                    <Link to="/" className = "btn btn-info  " style={{ width: "70px",marginLeft:'10px',marginTop:'15px' }}>Back</Link>
                </div>

            </form>
             
            </div>
        </div>
    );
  };