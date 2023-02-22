import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [waiting, setWaiting] = useState("");
  const form = useRef();

  const check = (e) => {
    e.preventDefault();

    setUser("");
    setEmail("");
    setMessage("");
  };
  const sendEmail = (e) => {
    e.preventDefault();
    setWaiting("Sending Email...");
    if (user && email && message) {
      emailjs
        .sendForm(
          "service_cv7wda2",
          "template_n3k8kxf",
          form.current,
          "KEgy-wTRNGD0D2r4g"
        )
        .then(
          (result) => {
            console.log(form);

            setWaiting("Email Sent");
            setUser("");
            setEmail("");
            setMessage("");
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      setWaiting("Missing required fields");
      console.log("Form not filled out correctly");
    }
  };

  return (
    <main className="contact-flex">
      <section className="contact-cont">
        <h1 className="topic">Contact Me</h1>
        <div className="text-cont">
          <p>Please reach out to me with and questions you may have.</p>
          <p>
            <a href="https://github.com/EfSoren">GitHub -</a>
            <a href="https://www.linkedin.com/in/ethan-sorensen-076324266/">
              - LinkedIn
            </a>
          </p>
          <p>
            “Technology is best when it brings people together.” - Matt
            Mullenweg
          </p>
          <div>
            <form className="email-box" ref={form} onSubmit={sendEmail}>
              <label>{waiting}</label>
              <label>Name</label>
              <input
                id="1"
                className="form-box"
                type="text"
                name="from_name"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
              <label>Your Email</label>
              <input
                id="2"
                className="form-box"
                type="email"
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Message</label>
              <textarea
                id="3"
                className="message-box"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <input className="send-box" type="submit" value="Send" />
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
