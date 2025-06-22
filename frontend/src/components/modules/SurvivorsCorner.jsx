import React from "react";

const SurvivorsCorner = () => {
  return (
    <section className="p-6 bg-white rounded-2xl shadow-md my-6">
      <h2 className="text-2xl font-bold text-black mb-4">Survivors' Corner</h2>
      <p className="text-gray-700 mb-4">
        This space is dedicated to survivors of gender-based violence to share stories, find healing, and connect with others who have walked similar paths. You are not alone.
      </p>
      <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-red-700 mb-2">Safe Space Stories</h3>
        <ul className="space-y-3 text-gray-600">
          <li>
            🌸 “Zinduka gave me the courage to speak out. Thank you for helping me heal.” – Amina
          </li>
          <li>
            🌼 “Reading others' stories helped me realize I wasn't to blame.” – Nyambura
          </li>
          <li>
            🌹 “I found the support group through Zinduka and it changed my life.” – Kevo
          </li>
        </ul>
      </div>
      <p className="mt-4 text-gray-600">
        Do you have a story to share or need someone to talk to? Reach out confidentially or join our support circle.
      </p>
    </section>
  );
};

export default SurvivorsCorner;
