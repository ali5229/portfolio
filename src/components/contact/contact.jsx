import React from 'react'
import './contact.css'
import theme from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const contact = () => {
    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "44f019d2-988a-4f3c-b08d-b7d31138b24c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id='contact' className="contact">
        <div className="title">
            <h1>Get in Contact</h1>
            <img src={theme} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk!</h1>
                <p>
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
                    Whether you have a question or just want to say hi, feel free to reach out!</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                          <img src={mail_icon} alt="" /><p>aliabbas55506@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /><p>03137490141</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /><p>Pakistan</p>
                        </div>
                    </div>
            </div>
            <form  onSubmit={onSubmit} className="contact-right">
                        <label htmlFor="">Your Name</label>
                        <input type="text" placeholder='Enter Your name' name='name'/>
                        <label htmlFor="">Your Email</label>
                        <input type="email" placeholder='Enter Your Email' name='email' />
                        <label htmlFor="">Write Your Message Here</label>
                        <textarea name="message" rows="8" placeholder='Enter Your Message'></textarea>
                        <button type='submit' className='contact-submit'>Submit</button>
                    </form>
        </div>
    </div>
  )
}

export default contact