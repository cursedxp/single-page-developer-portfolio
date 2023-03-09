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
    }
    if (!email.trim()) {
      errors.email = "Email is required ";
      //Email format check
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!message.trim()) {
      errors.message = "Message is required";
    }

    if (Object.keys(errors).length === 0) {
      setSubmit(true);
    } else {
      setErrors(errors);
    }
  };

  return (
    <section className="contact">
      <div>
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
        {errors.name && <p className="error">{errors.name}</p>}
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
        {errors.email && <p className="error">{errors.email}</p>}
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
        {errors.message && <p className="error">{errors.message}</p>}
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
