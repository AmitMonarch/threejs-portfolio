import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

// Need to Edit Template and UI for large screens.
const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [name]: value });
  };

  // service_sryeobn -- Service ID
  // template_727ma1b -- Template ID
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_sryeobn",
        "template_727ma1b",
        {
          name: form.name,
          to_name: "Amitesh Kumar B A",
          from_email: form.email,
          to_email: "amiteshkumarba@gmail.com",
          time: new Date().toLocaleString(),
          message: form.message,
        },
        "5e7rEdbO9O9pRYQZT",
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert();
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, 3000);
        },
        (error: Error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        },
      );
  };

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="contact-shell">
        <img
          src="/assets/terminal.png"
          alt="terminal-bg"
          className="contact-shell_bg"
        />

        <div className="contact-shell_overlay">
          <div className="contact-container">
            <h3 className="head-text">Let's talk</h3>
            <p className="text-lg text-slate-300 mt-3">
              Whether you&apos;re looking to build a new website, improve your
              existing platform, or bring a unique project to life, I&apos;m here
              to help.
            </p>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-12 flex flex-col space-y-7"
            >
              <label className="space-y-3">
                <span className="field-label">Full Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="field-input"
                  placeholder="ex., John Doe"
                />
              </label>

              <label className="space-y-3">
                <span className="field-label">Email address</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="field-input"
                  placeholder="ex., johndoe@gmail.com"
                />
              </label>

              <label className="space-y-3">
                <span className="field-label">Your message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="field-input"
                  placeholder="Share your thoughts or inquiries..."
                />
              </label>

              <button className="field-btn" type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}

                <img
                  src="/assets/arrow-up.png"
                  alt="arrow-up"
                  className="field-btn_arrow"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
