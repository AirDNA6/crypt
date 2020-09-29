import emailjs from 'emailjs-com';
import React, { Component} from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


class Contact extends Component {
  state = {
    fname: {
      value: "",
      valid: false
    },
    lname: {
      value: "",
      valid: false
    },
    email: {
      value: "",
      valid: false
    },
    subject: {
      value: "",
      valid: false
    },
    message: {
      value: "",
      valid: false
    }

  };



  changeHandler = event => {
    this.setState({ [event.target.name]: { value: event.target.value, valid: !!event.target.value } });
  };




  render() {

    function sendEmail(e) {
        e.preventDefault();

     
        emailjs.sendForm('gmail', 'template_5repv3t', e.target, 'user_mNhFpCEK5ZUqiJgQ1dBwE')
            .then((result) => {
                console.log(result.text);
                alert('Email sent')
             
            }, (error) => {
                console.log(error.text);
            });
           
        e.target.reset()
    }


    return (
      <div className="container mx-auto">
        <form className="mb-5 mt-5"  onSubmit={sendEmail}>
          <MDBRow md={4}>
          <MDBCol md="8" className="mx-auto">
              <MDBInput
              icon='user'
              label="First name"
                value={this.state.fname.value}
                className={this.state.fname.valid ? "is-valid" : "is-invalid"}
                name="fname"
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterNameEx"
              
                required
              >
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">Provide a valid name!</div>
              </MDBInput>
              </MDBCol>
            </MDBRow>

            <MDBRow>
            <MDBCol md="8" className="mx-auto">
              <MDBInput
              icon='address-card'
                value={this.state.lname.value}
                className={this.state.lname.valid ? "is-valid" : "is-invalid"}
                name="lname"
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterEmailEx2"
                label="Last name"
                required
              >
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">Provide a valid last name!</div>
              </MDBInput>
                </MDBCol>
            </MDBRow>
            
            <MDBRow>
            <MDBCol md="8" className="mx-auto">
              <MDBInput
                icon='envelope-open'
                value={this.state.email.value}
                className={this.state.email.valid ? "is-valid" : "is-invalid"}
                onChange={this.changeHandler}
                type="email"
                id="materialFormRegisterConfirmEx3"
                name="email"
                label="Your Email address"
              >
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </MDBInput>
              </MDBCol>
            </MDBRow>

          <MDBRow>
          <MDBCol md="8" className="mx-auto">
              <MDBInput
              icon='envelope'
                value={this.state.subject.value}
                className={this.state.subject.valid ? "is-valid" : "is-invalid"}
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterPasswordEx4"
                name="subject"
                label="Subject"
                required
              >
                <div className="invalid-feedback">
                  Please provide a valid city.
                </div>
                <div className="valid-feedback">Looks good!</div>
              </MDBInput>
                 </MDBCol>
            </MDBRow>
            
            <MDBRow>
            <MDBCol md="8" className="mx-auto">
              <MDBInput
             icon="pencil-alt"
                value={this.state.message.value}
                className={this.state.message.valid ? "is-valid" : "is-invalid"}
                onChange={this.changeHandler}
                type="textarea"
                rows="4"
                id="materialFormRegisterPasswordEx4"
                name="message"
                label="Message"
                required
              >
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
                <div className="valid-feedback">Looks good!</div>
              </MDBInput>
              </MDBCol>
            </MDBRow>
            
          

          <MDBBtn color="success" type="submit">
            Submit Form
          </MDBBtn>
         
    
         
        </form>
      </div>
    );
  }
}

export default Contact;