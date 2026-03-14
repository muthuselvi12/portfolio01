import { useRef } from "react";
import contact from "./Contact.module.css";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6fxajsg",
        "template_lo2zp2s",
        form.current,
        "JEipuGB-JdAD5UTqs",
      )
      .then(
        () => {
          alert("Message Sent Successfully!");
        },
        (error) => {
          console.log(error.text);
        },
      );

    e.target.reset();
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section className={contact.contactcontainer} id="contact">
      <p
        className={contact.contacttitle}
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <b>Start a Conversation</b>
      </p>
      <div className={contact.content}>
        <form ref={form} className={contact.contactform} onSubmit={sendEmail}>
          <div className={contact.formrow}>
            <div className={contact.inputgroup}>
              <label>FIRST NAME</label>
              <input type="text" placeholder="John" name="user_name" required />
            </div>

            <div className={contact.inputgroup}>
              <label>LAST NAME</label>
              <input
                type="text"
                placeholder="Smith"
                name="last_name"
                required
              />
            </div>
          </div>

          <div className={contact.inputgroup}>
            <label>EMAIL ADDRESS</label>
            <input
              type="email"
              placeholder="example@mail.com"
              name="user_email"
              required
            />
          </div>

          <div className={contact.inputgroup}>
            <label>MESSAGE</label>
            <textarea
              placeholder="Type your message..."
              name="message"
              required
            ></textarea>
          </div>

          <button className={contact.submitbtn}>Submit →</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
