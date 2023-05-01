import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
   

    const sendEmail = (e) => {
      e.preventDefault();
      const blank = document.getElementById("form");
      emailjs.sendForm('service_etcgpkb', 'template_gnprozm', form.current, 'vgpczsXOCo_lDRoCy')
        .then((result) => {
            console.log(result.text);
            console.log("message delivered");
            alert("message delivered");
        }, (error) => {
            console.log(error.text);
            console.log("error in delivery");
            alert("error in delivery");
        });

        blank.reset();
    };


    return ( 
        <div className="contact">

<section className="contact section" id="contact">
            <h2 className="section-title">Contact Us</h2>
          
            <div className="contact__container container bd-grid">
                <div className="contact__head">
                    
                    <div className="contact__email">
                        <h3 className="contact__title">Email</h3><br/>
                        <span className="contact__subtitle">build.teknology@gmail.com</span>
                    </div>
                    
                    <div className="contact__location">
                        <h3 className="contact__title">Location</h3><br/>
                        <span className="contact__subtitle">Port-Harcourt, Rivers State, NG</span>
                    
                    </div>
                </div>
                
                    <form ref={form} className="contact__form" id="form" onSubmit={sendEmail} >
                        <input name="username" type="text" id="fullName" placeholder="Name" className="contact__input"/>
                        <input name="useremail" type="email" id="email_id" placeholder="Email" className="contact__input"/>
                        <textarea name="message" id="message" cols="0" rows="10" className="contact__input"placeholder="Enter your message"/>
                        <input type="submit" value="Send" className="contact__button button"/>
                    </form>
                </div>
            </section>

        </div>
     );
}
 
export default Contact;