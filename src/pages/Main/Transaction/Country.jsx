import { Search, Edit2, Trash2, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export default function Country() {
  const countries = [
    {
      id: "#123490",
      name: "Bangladesh",
      region: "Islam",
      capital: "Dhaka",
      continent: "Asia",
      language: "Bangla",
      population: "25 million",
    },
    {
      id: "#123499",
      name: "Bangladesh",
      region: "Islam",
      capital: "Dhaka",
      continent: "Asia",
      language: "Bangla",
      population: "25 million",
    },
    {
      id: "#123490",
      name: "Bangladesh",
      region: "Islam",
      capital: "Dhaka",
      continent: "Asia",
      language: "Bangla",
      population: "25 million",
    },
    {
      id: "#123491",
      name: "Bangladesh",
      region: "Islam",
      capital: "Dhaka",
      continent: "Asia",
      language: "Bangla",
      population: "25 million",
    },
  ];

  return (
    <div className=" ">
      <div className="w-full mx-auto">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="80" height="80" rx="16" fill="#3698DC" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M54.1333 33.8352C54.9823 35.7795 55.4192 37.8786 55.4167 40.0002C55.4167 48.5085 48.5083 55.4168 40 55.4168C31.4917 55.4168 24.5833 48.5085 24.5833 40.0002C24.5833 31.4918 31.4917 24.5835 40 24.5835C40.3315 24.5835 40.6495 24.4518 40.8839 24.2174C41.1183 23.983 41.25 23.665 41.25 23.3335C41.25 23.002 41.1183 22.684 40.8839 22.4496C40.6495 22.2152 40.3315 22.0835 40 22.0835C30.1117 22.0835 22.0833 30.1118 22.0833 40.0002C22.0833 49.8885 30.1117 57.9168 40 57.9168C49.8883 57.9168 57.9167 49.8885 57.9167 40.0002C57.9167 37.4518 57.3833 35.0285 56.4233 32.8318C56.2903 32.5282 56.0421 32.2898 55.7332 32.1691C55.4244 32.0485 55.0803 32.0554 54.7767 32.1885C54.473 32.3215 54.2346 32.5698 54.114 32.8786C53.9933 33.1874 54.0003 33.5315 54.1333 33.8352Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M48.3333 22.0835C46.812 22.0839 45.3531 22.6885 44.2774 23.7642C43.2017 24.84 42.5971 26.2988 42.5967 27.8202C42.5967 28.8102 43.045 30.0152 43.7383 31.1918C45.13 33.5602 47.45 35.8835 47.45 35.8835C47.5659 35.9996 47.7036 36.0917 47.8552 36.1546C48.0068 36.2174 48.1693 36.2498 48.3333 36.2498C48.4974 36.2498 48.6599 36.2174 48.8115 36.1546C48.963 36.0917 49.1007 35.9996 49.2167 35.8835C49.2167 35.8835 51.5367 33.5602 52.9283 31.1918C53.6217 30.0152 54.07 28.8102 54.07 27.8202C54.07 24.6535 51.5 22.0835 48.3333 22.0835ZM48.3333 24.5835C50.12 24.5835 51.57 26.0335 51.57 27.8202C51.57 28.7002 50.915 29.7818 50.2117 30.8018C49.6328 31.6271 49.0056 32.4174 48.3333 33.1685C47.7917 32.5585 47.0833 31.7118 46.455 30.8018C45.7517 29.7818 45.0967 28.7002 45.0967 27.8202C45.0967 26.0335 46.5467 24.5835 48.3333 24.5835ZM22.6717 41.0602L28.1217 44.4668C29.115 45.0868 30.2633 45.4168 31.4333 45.4168H32.7C33.795 45.4168 34.835 45.8952 35.5483 46.7268L37.3 48.7718C37.7036 49.2423 37.9843 49.8056 38.1169 50.4111C38.2496 51.0167 38.23 51.6457 38.06 52.2418L37.1317 55.4902C37.0481 55.8065 37.0918 56.143 37.2536 56.4275C37.4153 56.7119 37.6822 56.9216 37.9968 57.0115C38.3114 57.1014 38.6487 57.0643 38.9363 56.9083C39.2239 56.7522 39.4389 56.4896 39.535 56.1768L40.4633 52.9285C40.7472 51.9351 40.7802 50.8868 40.5595 49.8775C40.3387 48.8681 39.871 47.9294 39.1983 47.1452L37.445 45.1002C36.8587 44.4152 36.1309 43.8653 35.3118 43.4884C34.4927 43.1115 33.6017 42.9165 32.7 42.9168H31.4333C30.7317 42.9168 30.0433 42.7202 29.4467 42.3468L23.995 38.9402C23.8558 38.848 23.6995 38.7847 23.5354 38.754C23.3713 38.7233 23.2028 38.7257 23.0396 38.7612C22.8765 38.7966 22.7221 38.8644 22.5856 38.9605C22.4491 39.0566 22.3333 39.1791 22.2449 39.3207C22.1565 39.4623 22.0973 39.6202 22.0709 39.7851C22.0446 39.9499 22.0515 40.1184 22.0912 40.2805C22.131 40.4426 22.2029 40.5951 22.3026 40.7291C22.4023 40.863 22.5278 40.9755 22.6717 41.0602Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M28.8817 27.2252L31.5417 32.5452C31.8325 33.1275 32.2441 33.6411 32.7491 34.0518C33.254 34.4624 33.8407 34.7608 34.47 34.9269L37.4 35.7019C38.1383 35.8969 38.71 36.4802 38.89 37.2219L40.145 42.3669C40.417 43.4837 41.0988 44.4575 42.055 45.0952L42.8317 45.6119C43.3721 45.9735 43.9833 46.2157 44.6246 46.3226C45.2659 46.4294 45.9227 46.3984 46.5511 46.2315C47.1795 46.0647 47.7652 45.7659 48.269 45.355C48.7729 44.9441 49.1835 44.4305 49.4733 43.8486L50.4317 41.9302C50.5662 41.6616 50.7573 41.4253 50.9917 41.2374C51.2262 41.0496 51.4985 40.9146 51.79 40.8419L56.4417 39.6786C56.759 39.5942 57.0304 39.3884 57.1973 39.1056C57.3641 38.8228 57.413 38.4857 57.3333 38.1671C57.2536 37.8486 57.0518 37.5742 56.7714 37.4032C56.491 37.2323 56.1547 37.1785 55.835 37.2536L51.1833 38.4152C50.5422 38.5759 49.9434 38.8733 49.4279 39.287C48.9124 39.7006 48.4924 40.2208 48.1967 40.8119L47.2367 42.7302C47.1054 42.9951 46.919 43.2289 46.6901 43.416C46.4611 43.6031 46.1949 43.7391 45.9092 43.815C45.6234 43.8909 45.3248 43.9049 45.0332 43.8561C44.7416 43.8072 44.4638 43.6967 44.2183 43.5319L43.4417 43.0152C43.007 42.7254 42.6971 42.2828 42.5733 41.7752L41.32 36.6302C41.1246 35.829 40.7165 35.0954 40.139 34.5066C39.5614 33.9179 38.8357 33.496 38.0383 33.2852L35.1083 32.5102C34.8223 32.4347 34.5557 32.299 34.3264 32.1122C34.097 31.9254 33.9102 31.6917 33.7783 31.4269L31.1183 26.1086C31.0458 25.9604 30.9447 25.8281 30.8207 25.7192C30.6968 25.6103 30.5525 25.527 30.3963 25.4741C30.24 25.4213 30.0748 25.3999 29.9102 25.4111C29.7456 25.4224 29.5849 25.4661 29.4373 25.5398C29.2897 25.6135 29.1582 25.7157 29.0502 25.8405C28.9423 25.9652 28.8602 26.1101 28.8085 26.2668C28.7569 26.4235 28.7367 26.5888 28.7493 26.7533C28.7618 26.9178 28.8068 27.0782 28.8817 27.2252Z"
                  fill="white"
                />
              </svg>

              <div>
                <p className="text-gray-600 text-sm">Total Countries</p>
                <p className="text-2xl font-semibold text-gray-900">120</p>
              </div>
            </div>
            <Link to={"/countries/add-item"}>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-full text-sm font-medium">
                Add New
              </button>
            </Link>
          </div>
        </div>

        {/* Country List Section */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold text-gray-900">
                Country List
              </h2>
              <Search className="w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Image
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    #Land
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Region
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Capital city
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Continent
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Language
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Population
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {countries.map((country, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="w-8 h-6 rounded overflow-hidden">
                        {/* German Flag */}
                        <div className="w-full h-full flex flex-col">
                          <div className="flex-1 bg-black"></div>
                          <div className="flex-1 bg-red-600"></div>
                          <div className="flex-1 bg-yellow-400"></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {country.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {country.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {country.region}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {country.capital}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {country.continent}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {country.language}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {country.population}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <button className="p-1 hover:bg-gray-100 rounded">
                          <Edit2 className="w-4 h-4 text-gray-400" />
                        </button>
                        <button className="p-1 hover:bg-gray-100 rounded">
                          <Trash2 className="w-4 h-4 text-gray-400" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-gray-200">
            <div className="flex items-center justify-center gap-2">
              <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded">
                {"< Back"}
              </button>
              <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded">
                1
              </button>
              <span className="px-2 text-sm text-gray-500">...</span>
              <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded">
                5
              </button>
              <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded">
                {"Next >"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
