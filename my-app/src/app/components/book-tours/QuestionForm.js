import React, { useState } from "react";
import Image from "next/image";
import { FaQuestionCircle, FaEnvelope, FaUser, FaPaperPlane } from "react-icons/fa";
import questionImage from "../../../public/question.png"; // Ndrysho këtë sipas emrit të fotos suaj

const QuestionWidget = () => {
  const [isFormVisible, setFormVisible] = useState(false);

  const handleButtonClick = () => {
    setFormVisible(true);
  };

  return (
    <section className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto mt-10">
      {isFormVisible ? (
        <article>
          <header className="text-center">
            <Image
              src={questionImage}
              alt="Question Illustration"
              className="mx-auto mb-6"
              width={80}
              height={80}
            />
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Question</h2>
          </header>
          <form action="#" method="POST" className="space-y-6">
            {/* Pyetja */}
            <fieldset>
              <label
                htmlFor="question"
                className="block text-sm font-medium mb-2 text-blue-600 items-center border-l-4 border-blue-200 pl-2"
              >
                <FaQuestionCircle className="inline text-blue-500 mr-2" />
                Your Question
              </label>
              <textarea
                id="question"
                name="question"
                rows="4"
                className="peer w-full border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 p-4 text-gray-800"
                placeholder="Write your question here..."
              ></textarea>
            </fieldset>
            {/* Emri */}
            <fieldset>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2 text-green-600 items-center border-l-4 border-green-200 pl-2"
              >
                <FaUser className="inline text-green-500 mr-2" />
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full border border-gray-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500 p-4 text-gray-800"
                placeholder="Type your full name"
              />
            </fieldset>
            {/* Email */}
            <fieldset>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 text-purple-600 items-center border-l-4 border-purple-200 pl-2"
              >
                <FaEnvelope className="inline text-purple-500 mr-2" />
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full border border-gray-300 rounded-lg shadow-sm focus:ring-purple-500 focus:border-purple-500 p-4 text-gray-800"
                placeholder="Type your email"
              />
            </fieldset>
            {/* Butoni i dërgimit */}
            <footer>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow flex items-center justify-center space-x-2"
              >
                <FaPaperPlane />
                <span>Send Question</span>
              </button>
            </footer>
          </form>
        </article>
      ) : (
        <article className="text-center">
          <header className="flex justify-center items-center rounded-full mb-6">
            <Image
              src={questionImage}
              alt="Question Illustration"
              className="rounded-full"
              width={80}
              height={80}
            />
          </header>
          <h2 className="text-xl font-bold text-gray-800 mb-3">Your Question</h2>
          <p className="text-sm text-gray-600 mb-6">
            Looking for more info? Send a question to the tour agent to find out more.
          </p>
          <footer>
            <button
              onClick={handleButtonClick}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg shadow"
            >
              Ask a Question
            </button>
          </footer>
        </article>
      )}
    </section>
  );
};

export default QuestionWidget;
