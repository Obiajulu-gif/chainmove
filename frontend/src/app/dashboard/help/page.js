"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaQuestionCircle } from "react-icons/fa";

const HelpPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset form (or send to backend in a real scenario)
    setForm({ name: "", email: "", message: "" });
  };

  // Mock data for FAQs
  const faqs = [
    {
      question: "How do I book a ride?",
      answer:
        "To book a ride, go to the 'Book A Trip' section, select your destination and date, and follow the prompts.",
    },
    {
      question: "How do I redeem my rewards?",
      answer:
        "You can redeem rewards in the 'Rewards' section by selecting an available reward and using your points.",
    },
    {
      question: "How do I update my profile information?",
      answer:
        "Go to 'Settings' in your dashboard to update personal information, including your contact details and profile picture.",
    },
    {
      question: "Who can I contact for additional support?",
      answer:
        "You can reach our support team via email at support@chainmove.com or through the contact form below.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      {/* Page Title */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
        <h1 className="text-4xl font-bold text-orange-500">Help Center</h1>
        <p className="text-gray-300 mt-2">We're here to help you with any questions or concerns.</p>
      </motion.div>

      {/* FAQ Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-orange-400 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>
              <h3 className="text-lg font-semibold text-white flex items-center">
                <FaQuestionCircle className="text-orange-500 mr-2" /> {faq.question}
              </h3>
              <p className="text-gray-300 mt-2">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <motion.div
          className="bg-gray-800 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}>
          <h2 className="text-2xl font-semibold text-orange-400 mb-4">Contact Us</h2>
          {isSubmitted ? (
            <p className="text-green-500">Thank you for reaching out! We’ll get back to you soon.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition duration-300 ease-in-out">
                Send Message
              </button>
            </form>
          )}
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}>
          <h2 className="text-2xl font-semibold text-orange-400 mb-4">Get in Touch</h2>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-orange-500 text-2xl" />
            <div>
              <p className="text-gray-300">Email</p>
              <p className="text-white">support@chainmove.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-orange-500 text-2xl" />
            <div>
              <p className="text-gray-300">Phone</p>
              <p className="text-white">+1 (234) 567-8901</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-orange-500 text-2xl" />
            <div>
              <p className="text-gray-300">Address</p>
              <p className="text-white">123 Blockchain Avenue, Web3 City</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HelpPage;
