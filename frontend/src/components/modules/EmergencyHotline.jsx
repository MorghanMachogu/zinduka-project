import React from 'react';

const EmergencyHotline = () => {
  return (
    <div className="bg-red-50 p-6 rounded-md shadow mt-6">
      <h2 className="text-2xl font-bold text-red-700 mb-4">Emergency Contacts</h2>
      <p className="mb-4 text-gray-700">If you or someone you know is in immediate danger, contact these trusted hotlines:</p>
      <ul className="space-y-3">
        <li className="bg-white p-3 rounded shadow">
          <strong>GBV National Helpline:</strong> <span className="text-blue-600">1195 (Free)</span>
        </li>
        <li className="bg-white p-3 rounded shadow">
          <strong>Usikimye Rescue Line:</strong> <span className="text-blue-600">+254 720 555 999</span>
        </li>
        <li className="bg-white p-3 rounded shadow">
          <strong>FIDA Kenya:</strong> <span className="text-blue-600">+254 709 760 000</span>
        </li>
        <li className="bg-white p-3 rounded shadow">
          <strong>Police Emergency:</strong> <span className="text-blue-600">999 / 112</span>
        </li>
      </ul>
    </div>
  );
};

export default EmergencyHotline;
