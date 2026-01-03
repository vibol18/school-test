import React from "react";

function Container() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Title */}
      <h1 className="text-center font-bold text-2xl mb-2">
        Benefits We Are Offering
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Build a more rewarding financial journey
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
          <h2 className="font-semibold text-lg mb-2">24h Support</h2>
          <p className="text-sm mb-4">
            Need help? Our 24/7 customer support is here for you. Contact us
            anytime for assistance.
          </p>
          <div className="bg-white text-blue-600 font-semibold text-center py-2 rounded">
            Assistant
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg">
          <h2 className="font-semibold text-lg mb-2">Secure Payments</h2>
          <p className="text-sm">
            Your transactions are protected with top-level security.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-500 text-white p-6 rounded-lg shadow-lg">
          <h2 className="font-semibold text-lg mb-2">Fast Process</h2>
          <p className="text-sm">
            Experience quick and easy financial services.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-black text-white p-6 rounded-lg shadow-lg">
          <h2 className="font-semibold text-lg mb-2">Trusted Service</h2>
          <p className="text-sm">
            Thousands of customers trust our platform.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Container;
