import Image from "next/image";

const ContactForm = () => {
  return (

    <>
      <div className="flex flex-col-reverse md:flex-row justify-start w-full">
        <div className="flex flex-col justify-center items-center text-black my-10 w-full">
          <div className="grid gap-6 mb-6 w-[90%] bg-[#d8e5ed] p-4 rounded-xl">
            <div className="flex justify-center">
              <h2>Send Us A Message</h2>
            </div>

            <form
              name="Maxum-Contact"
              action="/success"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input className="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="Maxum-Contact" />
              <div>
                <label htmlFor="name">Name *</label>
                <input type="text" name="name" required />
              </div>
              <div>
                <label htmlFor="company">Company</label>
                <input type="text" name="company" />
              </div>
              <div>
                <label htmlFor="phone">Phone Number *</label>
                <input type="tel" name="phone" required />
              </div>
              <div>
                <label htmlFor="email">Email *</label>
                <input type="email" name="email" required />
              </div>
              <div>
                <label htmlFor="project-details">Message *</label>
                <textarea name="project-details" required />
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
    </>
  );
};

export default ContactForm;
