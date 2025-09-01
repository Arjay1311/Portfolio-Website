"use client";
import React, { useState, useEffect } from "react";
import Githubicon from "../../public/github-icon.svg";
import Linkedinicon from "../../public/linkedin-icon.svg";
import Emailicon from "../../public/email-icon.svg";
import Link from "next/link";
import Image from "next/image";

/*TODO : 
1.Connect the forms to MongoDB and to store the data */

const EmailSection = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [time, setTime] = useState("");

  const [emailSubmitted, setEmailSubmitted] = useState(false);

  useEffect(() => {
    if (emailSubmitted) {
      const timer = setTimeout(() => {
        setEmailSubmitted(false);
      }, 3000); // 3 seconds
      return () => clearTimeout(timer);
    }
  }, [emailSubmitted]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
      time: new Date().toLocaleString(),
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
      setName("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          If you have any questions, suggestions, or just want to say hello,
          feel free to reach out to me via email. I would love to hear from you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/arjay1311" target="_blank">
            <Image src={Githubicon} alt="Github Icon" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/arjay-j-g-5b6450278"
            target="_blank"
          >
            <Image src={Linkedinicon} alt="LinkedIn Icon" />
          </Link>
          <Link
            href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new"
            target="_blank"
          >
            <Image src={Emailicon} alt="LinkedIn Icon" />
          </Link>
        </div>
        <div className="mt-15">
          <h3 className="font-bold mb-3">Contact Information</h3>
          <p className="text-[#ADB7BE]">Arjay J.G</p>
          <p className="text-[#ADB7BE]">Email: arjayjg1311@gmail.com</p>
        </div>
      </div>
      <div>
        <div className="mb-16" name="email-form">
          <form className="flex flex-col gap-2 mt-6" onSubmit={handleSubmit}>
            <div className="mb-8" name="email-form">
              <label
                htmlFor="name"
                className="text-white block mb-2 text-sm font-medium"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full placeholder-gray-500 bg-[#1F2937] text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Enter your Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </div>
            <div className="mb-10" name="subject-form">
              <label
                htmlFor="subject"
                className="text-white block mb-2 text-sm font-medium"
              >
                Subject:
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full placeholder-gray-500 bg-[#1F2937] text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Subject of your message"
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
                required
              />
            </div>
            <div className="mb-7" name="message-form">
              <label
                htmlFor="message"
                className="text-white block mb-2 text-sm font-medium"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full placeholder-gray-500 bg-[#1F2937] text-white px-4 py-5 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Your message here"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-fuchsia-800 hover:bg-fuchsia-700 text-white font-bold px-6 py-3 rounded-lg transition-colors duration-300"
            >
              Send Message
            </button>
            {emailSubmitted && (
              <p className="text-green-500 mt-2">Message sent successfully!</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
