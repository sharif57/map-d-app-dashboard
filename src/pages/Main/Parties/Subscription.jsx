// export default function Subscription() {
//   return (
//     <div>Subscription</div>
//   )
// }

import { Link } from "react-router-dom";

export default function Subscription() {
  return (
    <div className="flex flex-col items-center  p-8 min-h-screen">
      <div className="w-full  grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Starter Plan */}
        <div className="bg-white rounded-lg p-6 border border-[#F9A94B] flex flex-col ">
          <div className="flex justify-between  ga-4 items-center mb-4">
            <div>
              <h3 className="text-[25px] font-semibold text-gray-800">
                Starter
              </h3>
              <p className="text-[16px] w-[200px] text-gray-600">
                Perfect for beginners and side projects
              </p>
            </div>
            <div className="bg-[#FDDEB9] px-3 py-1 rounded-md">
              <span className="text-amber-800 font-medium text-[31px]">
                $50
              </span>
            </div>
          </div>

          <hr className="mt-6 border-[#FBCE98] pb-10" />
          <ul className="space-y-3 mb-6 flex-grow">
            <li className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-[16px] text-gray-700">
                Full access to Site Explorer
              </span>
            </li>
            <li className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-[16px] text-gray-700">
                Keyword Explorer searches
              </span>
            </li>
            <li className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-amber-200 flex items-center justify-center mr-3"></div>
              <span className="text-[16px] text-gray-700">
                Competitor Analysis reports
              </span>
            </li>
            <li className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-amber-200 flex items-center justify-center mr-3"></div>
              <span className="text-[16px] text-gray-700">
                AI Marketing & SEO recommendations
              </span>
            </li>
            <li className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-amber-200 flex items-center justify-center mr-3"></div>
              <span className="text-[16px] text-gray-700">
                Priority support (for Pro & Elite)
              </span>
            </li>
          </ul>

          <button className="w-full py-3 bg-[#DD7109] hover:bg-amber-700 text-white rounded-full mt-4 transition-colors">
            Delete Plan
          </button>
        </div>
        <div className="bg-white rounded-lg p-6 border border-[#F9A94B] flex flex-col ">
          <div className="flex justify-between  ga-4 items-center mb-4">
            <div>
              <h3 className="text-[25px] font-semibold text-gray-800">Pro</h3>
              <p className="text-[16px] w-[200px] text-gray-600">
                For growing teams and serious marketers{" "}
              </p>
            </div>
            <div className="bg-[#FDDEB9] px-3 py-1 rounded-md">
              <span className="text-amber-800 font-medium text-[31px]">
                $100
              </span>
            </div>
          </div>

          <hr className="mt-6 border-[#FBCE98] pb-10" />
          <ul className="space-y-3 mb-6 flex-grow">
            <li className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-[16px] text-gray-700">
                Full access to Site Explorer
              </span>
            </li>
            <li className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-[16px] text-gray-700">
                Keyword Explorer searches
              </span>
            </li>
            <li className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-amber-200 flex items-center justify-center mr-3"></div>
              <span className="text-[16px] text-gray-700">
                Competitor Analysis reports
              </span>
            </li>
            <li className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-amber-200 flex items-center justify-center mr-3"></div>
              <span className="text-[16px] text-gray-700">
                AI Marketing & SEO recommendations
              </span>
            </li>
            <li className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-amber-200 flex items-center justify-center mr-3"></div>
              <span className="text-[16px] text-gray-700">
                Priority support (for Pro & Elite)
              </span>
            </li>
          </ul>

          <button className="w-full py-3 bg-[#DD7109] hover:bg-amber-700 text-white rounded-full mt-4 transition-colors">
            Delete Plan
          </button>
        </div>
        <div className="bg-white rounded-lg p-6 border border-[#F9A94B] flex flex-col ">
          <div className="flex justify-between  ga-4 items-center mb-4">
            <div>
              <h3 className="text-[25px] font-semibold text-gray-800">Elite</h3>
              <p className="text-[16px] w-[200px] text-gray-600">
                Maximum power for agencies and SEO pros{" "}
              </p>
            </div>
            <div className="bg-[#FDDEB9] px-3 py-1 rounded-md">
              <span className="text-amber-800 font-medium text-[31px]">
                $150
              </span>
            </div>
          </div>

          <hr className="mt-6 border-[#FBCE98] pb-10" />
          <ul className="space-y-3 mb-6 flex-grow">
            <li className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-[16px] text-gray-700">
                Full access to Site Explorer
              </span>
            </li>
            <li className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-[16px] text-gray-700">
                Keyword Explorer searches
              </span>
            </li>
            <li className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-amber-200 flex items-center justify-center mr-3"></div>
              <span className="text-[16px] text-gray-700">
                Competitor Analysis reports
              </span>
            </li>
            <li className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-amber-200 flex items-center justify-center mr-3"></div>
              <span className="text-[16px] text-gray-700">
                AI Marketing & SEO recommendations
              </span>
            </li>
            <li className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-amber-200 flex items-center justify-center mr-3"></div>
              <span className="text-[16px] text-gray-700">
                Priority support (for Pro & Elite)
              </span>
            </li>
          </ul>

          <button className="w-full py-3 bg-[#DD7109] hover:bg-amber-700 text-white rounded-full mt-4 transition-colors">
            Delete Plan
          </button>
        </div>
      </div>

      <div className="mt-20">
        <Link to="/add-item" className="flex items-center px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-full transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          Add New Subscription
        </Link>
      </div>
    </div>
  );
}
