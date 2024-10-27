/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";
import { cards, variants } from "../Animation/constant";

const Contact = ({ contactRef }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    console.log(name, email, message);
    toast.success("Thank you for your message!");
  };

  return (
    <div
      className="min-h-screen  text-[#F8F8F2] py-20 px-4"
      id="contact"
      ref={contactRef}
    >
      <Toaster richColors />
      <h1 className="font-[Montserrat] text-5xl font-bold text-center mb-12">
        Contact Me
      </h1>
      <div className="max-w-7xl mx-auto bg-base-200 p-8 rounded-md shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div 
             variants={variants}
             initial="hidden"
             whileInView="show"
             viewport={{ once: true }}
          className="flex flex-col justify-center">
            <motion.h2 
            variants={cards}
            className="text-3xl font-semibold mb-4">Get in Touch</motion.h2>
            <motion.p variants={cards} className="text-lg mb-6">
              I'm open to opportunities and collaborations. Feel free to reach
              out to me via email or phone.
            </motion.p>
            <motion.div
             variants={variants}
             initial="hidden"
             whileInView="show"
             viewport={{ once: true }}
            className="space-y-4">
              <motion.p
              variants={cards}
              className="font-[Montserrat]">
                <span className="font-bold">Email:</span>{" "}
                <a
                  href="mailto:robinmitra789@gmail.com"
                  className="text-secondary hover:underline"
                >
                  robinmitra789@gmail.com
                </a>
              </motion.p>
              <motion.p
              variants={cards}
              className="font-[Montserrat]">
                <span className="font-bold">Phone:</span>{" "}
                <a
                  href="tel:+8801910832449"
                  className="text-secondary  hover:underline"
                >
                  +880 1910 832449
                </a>
              </motion.p>
            </motion.div>
            {/* Social Icons */}
            <div className="mt-8 flex space-x-6">
              <a
                href="https://github.com/RobinTheRedLight"
                target="_blank"
                rel="noreferrer"
                className="text-2xl text-[#F8F8F2] hover:text-secondary"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/robin-mitra-9129809b/"
                target="_blank"
                rel="noreferrer"
                className="text-2xl text-[#F8F8F2] hover:text-secondary"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded-md bg-base-100 text-[#F8F8F2] focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-md bg-base-100 text-[#F8F8F2] focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  name="message"
                  required
                  className="w-full px-4 py-2 rounded-md bg-base-100 text-[#F8F8F2] focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn bg-secondary text-black hover:bg-gray-300 w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
