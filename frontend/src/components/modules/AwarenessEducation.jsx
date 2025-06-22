import React from "react";

const AwarenessEducation = () => {
  return (
    <section className="p-6 bg-white shadow-md rounded-2xl my-6">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Awareness & Education</h2>
      <p className="mb-4 text-gray-700">
        Knowledge is a powerful tool in the fight against femicide and gender-based violence. 
        Zinduka provides educational resources to inform the public, change harmful mindsets, 
        and encourage a culture of empathy and accountability.
      </p>
      <ul className="list-disc list-inside text-gray-800">
        <li>Workshops and webinars on gender rights</li>
        <li>Downloadable flyers, eBooks, and posters</li>
        <li>Awareness campaigns on social media</li>
        <li>School & community outreach programs</li>
      </ul>
    </section>
  );
};

export default AwarenessEducation;
