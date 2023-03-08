export default function Contact() {
  return (
    <section>
      <div>
        <h3>Contact</h3>
        <p>
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </p>
      </div>
      <form action="">
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message" id="" cols="30" rows="10"></textarea>
        <button>Send Messa</button>
      </form>
    </section>
  );
}
