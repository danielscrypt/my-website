import React, { useState } from "react";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/b7f77620-97ac-11ec-bdf8-dd9c99f898ec"; // TODO - fill on the later step
const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      className="ContactForm"
    >
      <div>
        <input type="text" placeholder="Your name" name="name" required />
      </div>
      <div>
        <input type="email" placeholder="Email" name="email" required />
      </div>
      <div>
        <textarea placeholder="Your message" name="message" required />
      </div>
      <div>
        <button type="submit"> Send a message </button>
      </div>
    </form>
  );
};

export default ContactForm;