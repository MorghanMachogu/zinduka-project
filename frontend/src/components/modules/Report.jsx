import React from "react";

const Report = () => {
  return (
    <section className="bg-gray-100 text-black py-12 px-6 md:px-20" id="report">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">Make an Anonymous Report</h2>
        <p className="text-lg mb-6">
          If you or someone you know is experiencing gender-based violence, you can report it anonymously here. 
          Your safety and privacy are our top priority.
        </p>

        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 space-y-6">
          <div>
            <label className="block text-left text-sm font-bold mb-2" htmlFor="location">
              Location of Incident (optional)
            </label>
            <input
              id="location"
              type="text"
              placeholder="e.g., Nairobi, near CBD"
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block text-left text-sm font-bold mb-2" htmlFor="description">
              Description of Incident
            </label>
            <textarea
              id="description"
              required
              placeholder="Describe what happened..."
              className="w-full p-3 border border-gray-300 rounded h-32"
            ></textarea>
          </div>

          <div>
            <label className="block text-left text-sm font-bold mb-2" htmlFor="date">
              Date of Incident (optional)
            </label>
            <input
              id="date"
              type="date"
              className="w-full p-3 border border-gray-300 rounded"
            />
          </div>

          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition"
          >
            Submit Report
          </button>
        </form>

        <p className="text-sm text-gray-600 italic">
          * This report is anonymous and confidential. We do not store any identifying information.
        </p>
      </div>
    </section>
  );
};

export default Report;
