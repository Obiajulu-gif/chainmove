"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaAngleDown, FaAngleUp, FaEnvelope, FaPhone, FaQuestionCircle } from "react-icons/fa";

const DriverHelpPage = () => {
  const [faqOpen, setFaqOpen] = useState({});

  const toggleFaq = (index) => {
    setFaqOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  // Sample FAQ data
  const faqs = [
    {
      question: "How do I register as a driver on ChainMove?",
      answer:
        "To register as a driver, go to the registration page, fill in your details, and submit the required documents for verification. Once verified, you can start accepting ride requests.",
    },
    {
      question: "How do I withdraw my earnings?",
      answer:
        "Navigate to the 'Request Funds' section on your dashboard. Here, you can view your current balance and request a withdrawal to your preferred payment method.",
    },
    {
      question: "What should I do if I encounter a technical issue?",
      answer:
        "If you face any technical issues, try refreshing the page or logging out and back in. If the issue persists, contact our support team for further assistance.",
    },
    {
      question: "How does the ChainMove DAO work?",
      answer:
        "The ChainMove DAO is a decentralized governance structure that allows drivers and investors to participate in key platform decisions. Voting rights are granted based on your contributions and holdings.",
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
        <h1 className="text-4xl font-bold text-orange-500">Driver Help Center</h1>
        <p className="text-gray-300 mt-2">Get answers to common questions and find support.</p>
      </motion.div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold mb-4 text-orange-500 flex items-center">
          <FaQuestionCircle className="mr-2" /> Frequently Asked Questions
        </h2>

        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-4 shadow-lg">
            <div
              onClick={() => toggleFaq(index)}
              className="flex justify-between items-center cursor-pointer">
              <h3 className="text-lg font-medium">{faq.question}</h3>
              {faqOpen[index] ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            <AnimatePresence>
              {faqOpen[index] && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-gray-400 mt-2">
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="max-w-3xl mx-auto mt-12 space-y-6">
        <h2 className="text-2xl font-semibold mb-4 text-orange-500 flex items-center">
          <FaEnvelope className="mr-2" /> Contact Support
        </h2>
        <p className="text-gray-300 mb-4">
          If you need further assistance, feel free to reach out to our support team.
        </p>
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 space-y-4 md:space-y-0">
          {/* Support Phone */}
          <div className="bg-gray-800 rounded-lg p-4 shadow-lg w-full md:w-1/2 flex items-center space-x-4">
            <FaPhone className="text-orange-500 text-3xl" />
            <div>
              <p className="text-lg font-medium">Call Support</p>
              <p className="text-gray-400">+1 234 567 8900</p>
            </div>
          </div>
          {/* Support Email */}
          <div className="bg-gray-800 rounded-lg p-4 shadow-lg w-full md:w-1/2 flex items-center space-x-4">
            <FaEnvelope className="text-orange-500 text-3xl" />
            <div>
              <p className="text-lg font-medium">Email Support</p>
              <p className="text-gray-400">support@chainmove.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverHelpPage;
