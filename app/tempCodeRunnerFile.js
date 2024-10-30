<section className="py-12 bg-gray-100">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-semibold text-gray-800">Pricing Plans</h2>
      <p className="mt-4 text-lg text-gray-600">Choose a plan that suits your needs.</p>
    </div>
    <div className="flex flex-wrap justify-center">
      {/* Basic Plan */}
      <div className="w-full max-w-sm mx-4 my-4 bg-white rounded-lg shadow-lg lg:w-1/3">
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-800">Basic</h3>
          <p className="mt-4 text-gray-600">$10/month</p>
          <ul className="mt-6 space-y-4">
            <li className="text-gray-600">Feature 1</li>
            <li className="text-gray-600">Feature 2</li>
            <li className="text-gray-600">Feature 3</li>
          </ul>
          <button className="w-full px-4 py-2 mt-6 text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none">
            Choose Plan
          </button>
        </div>
      </div>
      {/* Standard Plan */}
      <div className="w-full max-w-sm mx-4 my-4 bg-white border-2 border-yellow-500 rounded-lg shadow-lg lg:w-1/3">
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-800">Standard</h3>
          <p className="mt-4 text-gray-600">$20/month</p>
          <ul className="mt-6 space-y-4">
            <li className="text-gray-600">Feature 1</li>
            <li className="text-gray-600">Feature 2</li>
            <li className="text-gray-600">Feature 3</li>
          </ul>
          <button className="w-full px-4 py-2 mt-6 text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none">
            Choose Plan
          </button>
        </div>
      </div>
      {/* Premium Plan */}
      <div className="w-full max-w-sm mx-4 my-4 bg-white rounded-lg shadow-lg lg:w-1/3">
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-800">Premium</h3>
          <p className="mt-4 text-gray-600">$30/month</p>
          <ul className="mt-6 space-y-4">
            <li className="text-gray-600">Feature 1</li>
            <li className="text-gray-600">Feature 2</li>
            <li className="text-gray-600">Feature 3</li>
          </ul>
          <button className="w-full px-4 py-2 mt-6 text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none">
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  </div>
</section>