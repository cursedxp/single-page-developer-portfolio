import { useState } from "react";
import oval from "../images/pattern-rings.svg";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    //Form validation control
    if (!name.trim()) {
      errors.name = "Name is required";
      const inputName = document.querySelector('input[name = "name"]');
      inputName.style.borderBottom = "1px solid #FF6F5B";
    }
    if (!email.trim()) {
      errors.email = "Email is required ";
      const inputEmail = document.querySelector('input[name = "email"]');
      inputEmail.style.borderBottom = "1px solid #FF6F5B";
      //Email format check
    } else if (
      !/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    ) {
      errors.email = "Email is invalid";
    }
    if (!message.trim()) {
      errors.message = "Message is required";
      const inputMessage = document.querySelector('textarea[name = "message"]');
      inputMessage.style.borderBottom = "1px solid #FF6F5B";
    }

    if (Object.keys(errors).length === 0) {
      setSubmit(true);
    } else {
      setErrors(errors);
    }
  };

  return (
    <section className="contact">
      <div className="sestion-description">
        <h2>Contact</h2>
        <p>
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="NAME"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        {errors.name && (
          <p
            className="error"
            style={{
              fontSize: "12px",
              color: "#FF6F5B",
              textAlign: "right",
            }}
          >
            {errors.name}
          </p>
        )}
        <br />
        <input
          type="email"
          name="email"
          placeholder="EMAIL"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {errors.email && (
          <p
            className="error"
            style={{
              fontSize: "12px",
              color: "#FF6F5B",
              textAlign: "right",
            }}
          >
            {errors.email}
          </p>
        )}
        <br />
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="MESSAGE"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>
        {errors.message && (
          <p
            className="error"
            style={{
              fontSize: "12px",
              color: "#FF6F5B",
              textAlign: "right",
            }}
          >
            {errors.message}
          </p>
        )}
        <br />
        <div className="flex justify-end">
          <button type="submit">Send Message</button>
        </div>
        {submit && <p className="succes-message">Your message has sent</p>}
      </form>
      <img className="oval" src={oval} alt="" />
    </section>
  );
}
