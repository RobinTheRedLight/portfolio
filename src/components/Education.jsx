import { motion } from "framer-motion";
import { fadeUp } from "../Animation/constant";

const Education = () => {
  return (
    <div className=" py-12 px-4">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-base-200 p-8 rounded-md shadow-md"
      >
        <h1 className="text-4xl font-bold mb-6 text-center">Education</h1>
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg
                className="w-12 h-12 text-indigo-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L1 7l11 5 9-5-9-5z" />
                <path d="M1 7v7c0 5 11 8 11 8s11-3 11-8V7L12 12 1 7z" />
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="text-2xl font-semibold">
                Bachelor of Science in Computer Science &amp; Engineering
              </h2>
              <p className="">
                Bangladesh Army International University of Science and
                Technology
              </p>
              <p className="">CGPA: 3.24</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
