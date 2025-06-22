import React, { useState } from "react";

const DonationForm = () => {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Donation submitted:", { name, amount, message });
    alert("Thank you for your support!");
    setName("");
    setAmount("");
    setMessage("");
  };

  return (
    <section className="p-6 bg-white shadow-md rounded-2xl my-6">
      <h2 className="text-2xl font-bold text-black mb-4">Make a Donation</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name (optional)"
          />
        </div>
        <div>
          <label className="block text-gray-700">Amount (KES)</label>
          <input
            type="number"
            className="w-full p-2 border rounded"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="e.g. 500"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Message</label>
          <textarea
            className="w-full p-2 border rounded"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message (optional)"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Donate Now
        </button>
      </form>
    </section>
  );
};

export default DonationForm;
