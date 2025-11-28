"use client";

import React from "react";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire this up to real backend or email later.
    // For now, just show the success page.
    window.location.href = "/success";
  };

  return (
    <div className="flex flex-col-reverse md:flex-row justify-start w-full">
      <div className="flex flex-col justify-center items-center text-black my-10 w-full">
        <div className="grid gap-6 mb-6 w-[90%] bg-[#d8e5ed] p-4 rounded-xl">
          <div className="flex justify-center">
            <h2>Send Us A Message</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name *</label>
              <input id="name" type="text" name="name" required />
            </div>
            <div>
              <label htmlFor="company">Company</label>
              <input id="company" type="text" name="company" />
            </div>
            <div>
              <label htmlFor="phone">Phone Number *</label>
              <input id="phone" type="tel" name="phone" required />
            </div>
            <div>
              <label htmlFor="email">Email *</label>
              <input id="email" type="email" name="email" required />
            </div>
            <div>
              <label htmlFor="project-details">Message *</label>
              <textarea id="project-details" name="project-details" required />
            </div>
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="bg-accent2 hover:bg-[#b26636] w-[40%]"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
