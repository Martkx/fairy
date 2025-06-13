import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-purple-100 flex flex-col items-center p-4 space-y-6">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-4 py-2 bg-purple-200 rounded-xl">
        <div className="space-y-1">
          <div className="w-6 h-1 bg-white rounded"></div>
          <div className="w-6 h-1 bg-white rounded"></div>
          <div className="w-6 h-1 bg-white rounded"></div>
        </div>
        <div className="w-10 h-10 bg-white rounded-full"></div>
      </header>

      {/* Logo and Slogan */}
      <div className="text-center">
        <div className="w-12 h-12 bg-blue-200 rounded-full mx-auto mb-1"></div>
        <h1 className="text-lg font-bold">
          <span className="text-purple-700">Fairy</span>. Wissen was <span className="text-purple-700">fair</span> ist
        </h1>
      </div>

      {/* Statistics Circle */}
      <div className="w-full bg-white rounded-xl p-4 shadow-md text-center">
        <p className="text-sm font-semibold">Du hast bereits 1669 Euro transparent verglichen</p>
        <div className="relative w-32 h-32 mx-auto my-4">
          <div className="absolute inset-0 rounded-full border-8 border-red-400"></div>
          <div className="absolute inset-2 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold">1669€</span>
            <span className="text-sm">verglichen</span>
          </div>
        </div>
      </div>

      {/* Jobs Categories */}
      <div className="flex justify-between space-x-4 overflow-x-auto w-full">
        {['Gärtner', 'Elektriker', 'Dachdecker', 'Maler'].map((job) => (
          <div key={job} className="flex-shrink-0 text-center">
            <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto"></div>
            <p className="text-sm font-semibold mt-1">{job}</p>
          </div>
        ))}
      </div>

      {/* Map Section */}
      <div className="w-full bg-purple-200 p-4 rounded-xl text-center">
        <div className="w-full h-32 bg-gray-400 mb-2 rounded"></div>
        <p className="font-semibold">Entdecke die Fairy-Karte</p>
      </div>

      {/* Reward Section */}
      <div className="w-full bg-purple-100 border-2 border-purple-300 p-4 rounded-xl text-center">
        <div className="w-12 h-12 bg-blue-300 rounded-full mx-auto mb-2"></div>
        <p className="font-semibold">Rechnung scannen.<br />Punkte sammeln.<br />Belohnung kassieren!</p>
      </div>

      {/* Empty Section Placeholder */}
      <div className="w-full h-32 bg-purple-100 border border-purple-200 rounded-xl"></div>
    </div>
  );
}
