import React from "react";
import phone from "./images/pho.png";
import email from "./images/mess.jpg";
import emailjs from "emailjs-com";
import Typography from "@material-ui/core/Typography";
import "./Contact.css";
function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d2q5x8e",
        "template_tbr1971",
        e.target,
        "82HUNCTaunwlfzNDn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }
  return (
    <>
      <div className="centerdivvv">
        <div className="maincontact">
          <section className="Conttact">
            <div className="container">
              <Typography align="center" variant="h5">
                Contact <span>us</span>
              </Typography>

              <div className="formcontainer">
                <form onSubmit={sendEmail}>
                  <div className="input-wrapper">
                    <input type="text" name="name" placeholder="your name " />
                    <input
                      type="email"
                      name="email"
                      placeholder="your email "
                    />
                  </div>
                  <div className="input-wrapper2">
                    <input type="text" name="subject" placeholder="Subject" />
                    <textarea
                      style={{ height: "200px" }}
                      name="message"
                      cols="30"
                      rows="20"
                      placeholder="type message"
                    />
                  </div>

                  <div className="btn-wrapper">
                    <input
                      type="submit"
                      value="Send Message"
                      className="btn btn-primary"
                    ></input>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Contact;
