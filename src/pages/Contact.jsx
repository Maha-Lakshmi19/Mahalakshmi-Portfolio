import React, { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionHeading from "../Component/SectionHeading";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Field-wise validation
  const validateField = (name, value) => {
    let message = "";

    if (name === "name") {
      if (!value.trim()) message = "⚠️ Name is required!";
      else if (value.length < 3) message = "⚠️ Name must be at least 3 characters!";
    }

    if (name === "email") {
      if (!value.trim()) message = "⚠️ Email is required!";
      else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) message = "⚠️ Please enter a valid email!";
      }
    }

    if (name === "message") {
      if (!value.trim()) message = "⚠️ Message is required!";
      else if (value.length < 10) message = "⚠️ Message must be at least 10 characters!";
    }

    setErrors((prev) => ({ ...prev, [name]: message }));
  };

  const handleBlur = (e) => {
    validateField(e.target.name, e.target.value);
  };

  const validateAll = () => {
    validateField("name", form.name);
    validateField("email", form.email);
    validateField("message", form.message);

    return !errors.name && !errors.email && !errors.message;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateAll()) return;

    setLoading(true);

    emailjs
      .send(
        "service_j8bk8uj", // replace with your service id
        "template_bfgva73", // replace with your template id
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "wfQhjB51RIvGUx-z5" // replace with your public key
      )
      .then(
        () => {
          setSuccess("✅ Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
          setErrors({ name: "", email: "", message: "" });
          setTimeout(() => setSuccess(""), 4000);
          setLoading(false);
        },
        () => {
          setSuccess("❌ Something went wrong. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-[#0a192f] text-white px-6 py-20"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Info */}
        <div className="space-y-6" data-aos="fade-right">
               <SectionHeading title="Contact" highlight="Me" />
          <p className="text-gray-300 mb-6">
            Have a project in mind? Let’s build something amazing together.
          </p>

          <div className="space-y-4">
            <p className="flex items-center gap-3">
  <FaEnvelope className="text-cyan-400" />
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=mahaaru1999@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-cyan-400 transition"
  >
    mahaaru1999@gmail.com
  </a>
</p>

            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-cyan-400" />
              <a href="tel:+919566861697" className="hover:text-cyan-400 transition">
                +91 9566861697
              </a>
            </p>
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-cyan-400" /> Karaikudi, Tamil Nadu, India - 630 104
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 pt-4">
            <a
              href="https://github.com/Maha-Lakshmi19"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-cyan-400"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-cyan-400"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/_maha_mahi_?igsh=NzdsYnIzZW4xejll&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-cyan-400"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Right - Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#112240] p-8 rounded-2xl shadow-lg space-y-6"
          data-aos="fade-up"
        >
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full p-3 rounded-md bg-[#0a192f] border border-gray-600 focus:border-cyan-400 outline-none"
            />
            {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full p-3 rounded-md bg-[#0a192f] border border-gray-600 focus:border-cyan-400 outline-none"
            />
            {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full p-3 rounded-md bg-[#0a192f] border border-gray-600 focus:border-cyan-400 outline-none"
            ></textarea>
            {errors.message && <p className="text-red-400 text-sm">{errors.message}</p>}
          </div>

          {success && (
            <div
              className={`p-3 rounded-md text-sm ${
                success.startsWith("✅")
                  ? "bg-green-900 text-green-300"
                  : "bg-red-900 text-red-300"
              }`}
            >
              {success}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-cyan-400 text-black font-semibold rounded-full shadow-lg hover:bg-white transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
