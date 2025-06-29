
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
