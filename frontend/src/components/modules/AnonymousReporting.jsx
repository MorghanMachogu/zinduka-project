import React from 'react';

const AnonymousReporting = () => {
  return (
    <div className="p-6 bg-white rounded shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4 text-red-600">Report a Case Anonymously</h2>
      <p className="mb-4 text-gray-700">
        Your safety is our priority. Please fill out the form below to report any case of femicide or gender-based violence.
        All submissions are completely confidential.
      </p>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Location (optional)"
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        <textarea
          placeholder="Describe the incident..."
          rows="5"
          className="w-full border border-gray-300 rounded px-3 py-2"
        ></textarea>
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded"
        >
          Submit Report
        </button>
      </form>
    </div>
  );
};

export default AnonymousReporting;
