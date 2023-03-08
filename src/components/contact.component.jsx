import oval from "../images/pattern-rings.svg";

export default function Contact() {
  return (
    <section className="contact">
      <div>
        <h2>Contact</h2>
        <p>
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </p>
      </div>
      <form action="">
        <input type="text" name="name" placeholder="NAME" />
        <br />
        <input type="email" name="email" placeholder="EMAIL" />
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="MESSAGE"
        ></textarea>
        <div className="flex justify-end">
          <button>Send Message</button>
        </div>
      </form>
      <img className="oval" src={oval} alt="" />
    </section>
  );
}
