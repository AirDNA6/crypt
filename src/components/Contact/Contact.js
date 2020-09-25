import emailjs from 'emailjs-com';
import React from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

class Contact extends React.Component {
  render() {

    function sendEmail(e) {
      e.preventDefault();
  
  emailjs.sendForm('gmail', 'template_5repv3t', e.target, 'user_mNhFpCEK5ZUqiJgQ1dBwE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
  

  return(
      <div>
          <div className="container">
          <form onSubmit={sendEmail}>
                  <div className="row pt-5 mx-auto">
                      <div className="col-8 form-group mx-auto">
                          <input type="text" className="form-control" placeholder="Name" name="name"/>
                      </div>
                      <div className="col-8 form-group pt-2 mx-auto">
                          <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                      </div>
                      <div className="col-8 form-group pt-2 mx-auto">
                          <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                      </div>
                      <div className="col-8 form-group pt-2 mx-auto">
                          <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                      </div>
                      <div className="col-8 pt-3 mx-auto">
                          <input type="submit" className="btn btn-info" value="Send Message"></input>
                      </div>
                  </div>
              </form>
          </div>
      </div>
  )
  }
}

export default Contact;