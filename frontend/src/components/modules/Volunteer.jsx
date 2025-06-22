// src/components/modules/Volunteer.jsx
import React from "react";

const Volunteer = () => {
  return (
    <section className="bg-white text-black py-12 px-6 md:px-20" id="volunteer">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-600">Become a Volunteer</h2>
        <p className="text-lg mb-6">
          Join our mission to support survivors, raise awareness, and make communities safer.
          Whether you're a student, counselor, activist, or concerned citizen, your time and talent
          can make a real difference.
        </p>

        <form className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded"
              required
            />
          </div>
          <textarea
            placeholder="Tell us why you want to volunteer..."
            className="w-full p-3 border border-gray-300 rounded h-32"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </section>
  );
};

export default Volunteer;
