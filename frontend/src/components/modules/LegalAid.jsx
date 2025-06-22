// src/components/modules/LegalAid.jsx
import React from "react";

const LegalAid = () => {
  return (
    <section className="bg-gray-100 text-black py-12 px-6 md:px-20" id="legalaid">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-600 text-center">
          Legal Aid & Support
        </h2>
        <p className="text-lg mb-6 text-center">
          Know your rights and access support for legal matters related to gender-based violence.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2 text-black">Legal Rights Overview</h3>
            <p className="text-gray-700">
              Understand what the law says about domestic abuse, sexual assault, and protection
              orders in Kenya.
            </p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2 text-black">Free Legal Clinics</h3>
            <p className="text-gray-700">
              Access free legal clinics available in Nairobi, Mombasa, and other counties for GBV
              survivors.
            </p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2 text-black">Online Legal Help</h3>
            <p className="text-gray-700">
              Reach out to volunteer lawyers and human rights defenders online through verified
              portals.
            </p>
          </div>

          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2 text-black">Pro Bono Support</h3>
            <p className="text-gray-700">
              Contact organizations offering pro bono legal representation to GBV survivors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalAid;
