// // import React from 'react'

// // export default function AddItem() {
// //   return (
// //     <div>AddItem</div>
// //   )
// // }

// import { useState } from "react";
// import { Link } from "react-router-dom";

// export default function AddItem() {
//   // const router = useRouter()
//   const [title, setTitle] = useState("");
//   const [subtitle, setSubtitle] = useState("");
//   const [amount, setAmount] = useState("");
//   const [features, setFeatures] = useState([
//     { id: "1", name: "Full access to Site Explorer", selected: true },
//     { id: "2", name: "Keyword Explorer searches", selected: true },
//     { id: "3", name: "Competitor Analysis reports", selected: true },
//     { id: "4", name: "AI Marketing & SEO recommendations", selected: false },
//     { id: "5", name: "Gamified challenges access", selected: false },
//     { id: "6", name: "Priority support (for Pro & Elite)", selected: false },
//   ]);

//   const toggleFeature = (id) => {
//     setFeatures(
//       features.map((feature) =>
//         feature.id === id
//           ? { ...feature, selected: !feature.selected }
//           : feature
//       )
//     );
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Here you would typically send this data to your backend
//     const newSubscription = {
//       title,
//       subtitle,
//       amount,
//       features: features.filter((f) => f.selected).map((f) => f.name),
//     };

//     console.log("New subscription created:", newSubscription);

//     // Reset form and redirect back to pricing page
//     setTitle("");
//     setSubtitle("");
//     setAmount("");
//     setFeatures(features.map((f) => ({ ...f, selected: false })));

//     // Go back to main pricing page
//     // router.push("/")
//   };

//   return (
//     <div className=" p-6">
//       <div className=" ">
//         <div className="bg-white p-4 rounded-full shadow-sm mb-6 flex items-center">
//           <Link to="/subscription" className="mr-4 text-gray-700">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </Link>
//           <h1 className="text-lg font-medium text-gray-800">
//             Add Subscription
//           </h1>
//         </div>

//         <div className="max-w-2xl">
//           <form onSubmit={handleSubmit}>
//             <div className="space-y-4 mb-6">
//               <input
//                 type="text"
//                 placeholder="Package Title"
//                 className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 required
//               />

//               <input
//                 type="text"
//                 placeholder="Package Subtitle"
//                 className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
//                 value={subtitle}
//                 onChange={(e) => setSubtitle(e.target.value)}
//                 required
//               />

//               <input
//                 type="text"
//                 placeholder="Package Amount"
//                 className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
//                 value={amount}
//                 onChange={(e) => setAmount(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="bg-white p-5 rounded-full border border-gray-200 mb-6">
//               <h2 className="text-amber-600 font-medium mb-4">
//                 Select Features :
//               </h2>

//               <div className="space-y-3">
//                 {features.map((feature) => (
//                   <div key={feature.id} className="flex items-center">
//                     <div
//                       className={`w-5 h-5 rounded-full ${
//                         feature.selected
//                           ? "bg-amber-500"
//                           : "bg-white border border-gray-300"
//                       } flex items-center justify-center mr-3 cursor-pointer`}
//                       onClick={() => toggleFeature(feature.id)}
//                     >
//                       {feature.selected && (
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-3 w-3 text-white"
//                           viewBox="0 0 20 20"
//                           fill="currentColor"
//                         >
//                           <path
//                             fillRule="evenodd"
//                             d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                             clipRule="evenodd"
//                           />
//                         </svg>
//                       )}
//                     </div>
//                     <span className="text-sm text-gray-700">
//                       {feature.name}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="flex justify-center">
//               <button
//                 type="submit"
//                 className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-md transition-colors font-medium"
//               >
//                 Create
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function AddItem() {
  const navigate = useNavigate()
  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-200 rounded-full">
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h1 className="text-xl font-semibold text-gray-900">Add Country</h1>
        </div>

        {/* Form Container */}
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Constituent */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Constituent</label>
                <input
                  type="text"
                  placeholder="Write here"
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded-full text-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Write here"
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded-full text-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Religion */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Religion</label>
                <input
                  type="text"
                  placeholder="Write here"
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded-full text-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Capital city */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Capital city</label>
                <input
                  type="text"
                  placeholder="Write here"
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded-full text-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  rows={4}
                  placeholder="Write here"
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg text-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Add Photo Section */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Add Photo ()</label>
                <div className="bg-gray-200 rounded-lg p-8 text-center">
                  <div className="flex flex-col items-center justify-center space-y-4">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                      Add Photo
                    </button>
                    <p className="text-sm text-gray-500">Or drag and drop files</p>
                  </div>
                </div>
                <button className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-full font-medium">
                  Save Now
                </button>
              </div>

              {/* Neighbor country */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Neighbor country</label>
                <input
                  type="text"
                  placeholder="Write here"
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded-full text-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Official language */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Official language</label>
                <input
                  type="text"
                  placeholder="Write here"
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded-full text-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Population */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Population</label>
                <input
                  type="text"
                  placeholder="Write here"
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded-full text-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <input
                  type="text"
                  placeholder="Write here"
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded-full text-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Bottom Action Buttons */}
          <div className="flex justify-center gap-4 mt-8 pt-6 border-t border-gray-200">
            <button className="px-8 py-3 text-gray-600 hover:bg-gray-100 rounded-full font-medium">Remove</button>
            <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-medium">
              Add Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
