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
import toast, { Toaster } from "react-hot-toast";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
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

  // Validation
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

    if (name === "subject") {
      if (!value.trim()) message = "⚠️ Subject is required!";
      else if (value.length < 5) message = "⚠️ Subject must be at least 5 characters!";
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
    validateField("subject", form.subject);
    validateField("message", form.message);

    return (
      !errors.name && !errors.email && !errors.subject && !errors.message
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateAll()) return;

    setLoading(true);

    emailjs
      .send(
        "service_j8bk8uj", // 🔑 Service ID
        "template_bfgva73", // 🔑 Template ID
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "wfQhjB51RIvGUx-z5" // 🔑 Public key
      )
      .then(
        () => {
          toast.success("✅ Message sent successfully!");
          setForm({ name: "", email: "", subject: "", message: "" });
          setErrors({ name: "", email: "", subject: "", message: "" });
          setLoading(false);
        },
        () => {
          toast.error("❌ Something went wrong. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="bg-[#0a192f] text-white px-6 py-20">
      {/* Toast Container */}
      <Toaster position="top-right" reverseOrder={false} />

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
              <a
                href="tel:+919566861697"
                className="hover:text-cyan-400 transition"
              >
                +91 9566861697
              </a>
            </p>
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-cyan-400" /> Karaikudi, Tamil Nadu,
              India - 630 104
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
              href="https://www.linkedin.com/in/maha-lakshmi-82a2161b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-cyan-400"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/_maha_mahi_"
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
          {/* Name */}
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
            {errors.name && (
              <p className="text-red-400 text-sm">{errors.name}</p>
            )}
          </div>

          {/* Email */}
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
            {errors.email && (
              <p className="text-red-400 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Subject */}
          {/* <div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full p-3 rounded-md bg-[#0a192f] border border-gray-600 focus:border-cyan-400 outline-none"
            />
            {errors.subject && (
              <p className="text-red-400 text-sm">{errors.subject}</p>
            )}
          </div> */}

          {/* Message */}
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
            {errors.message && (
              <p className="text-red-400 text-sm">{errors.message}</p>
            )}
          </div>

          {/* Button */}
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
