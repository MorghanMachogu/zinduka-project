import React from "react";

const FundingSupport = () => {
  return (
    <section className="p-6 bg-white shadow-md rounded-2xl my-6">
      <h2 className="text-2xl font-bold text-black mb-4">Funding & Support</h2>
      <p className="text-gray-700 mb-4">
        Zinduka relies on community support and partner organizations to keep our platform active and impactful.
        Every contribution helps us expand survivor support, awareness campaigns, legal aid, and emergency response.
      </p>
      <ul className="list-disc list-inside text-gray-600 space-y-2">
        <li>Partner with us through your organization or institution.</li>
        <li>Volunteer your time, skills, or resources.</li>
        <li>Make a one-time or recurring financial contribution.</li>
        <li>Provide supplies, services, or logistics support.</li>
      </ul>
      <div className="mt-6">
        <a
          href="#donate"
          className="inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Support Now
        </a>
      </div>
    </section>
  );
};

export default FundingSupport;
