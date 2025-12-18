// import { useUpdateAccountManagementMutation, useUpdateDataManagementMutation, useUpdateOurStoryMutation, useUpdatePaymentQueriesMutation } from "../redux/features/privacySlice"

// export default function MangementData() {
//     const [updateOurStory] = useUpdateOurStoryMutation();
//     const [updateDataManagement] = useUpdateDataManagementMutation();
//     const [updateAccountManagement] = useUpdateAccountManagementMutation();
//     const [updatePaymentQueries] = useUpdatePaymentQueriesMutation();
//     return (
//         <div>

//         </div>
//     )
// }
"use client"

import { useState } from "react"
import {
    useUpdateAccountManagementMutation,
    useUpdateDataManagementMutation,
    useUpdateOurStoryMutation,
    useUpdatePaymentQueriesMutation,
} from "../redux/features/privacySlice"
import toast from "react-hot-toast"

const sections = [
    { key: "ourStory", title: "Our Story" },
    { key: "dataManagement", title: "Data Management" },
    { key: "accountManagement", title: "Account Management" },
    { key: "paymentQueries", title: "Payment Queries" },
]

export default function MangementData() {
    const [activeTab, setActiveTab] = useState("ourStory")
    const [description, setDescription] = useState("")

    const [updateOurStory, { isLoading: loadingOurStory }] =
        useUpdateOurStoryMutation()
    const [updateDataManagement, { isLoading: loadingData }] =
        useUpdateDataManagementMutation()
    const [updateAccountManagement, { isLoading: loadingAccount }] =
        useUpdateAccountManagementMutation()
    const [updatePaymentQueries, { isLoading: loadingPayment }] =
        useUpdatePaymentQueriesMutation()

    const isLoading =
        loadingOurStory || loadingData || loadingAccount || loadingPayment

    const handleSubmit = async () => {
        if (!description.trim()) {
            return toast.error("Description required")
        }

        const payload = { description }
        let res

        try {
            if (activeTab === "ourStory") {
                res = await updateOurStory(payload).unwrap()
            }
            else if (activeTab === "dataManagement") {
                res = await updateDataManagement(payload).unwrap()
            }
            else if (activeTab === "accountManagement") {
                res = await updateAccountManagement(payload).unwrap()
            }
            else if (activeTab === "paymentQueries") {
                res = await updatePaymentQueries(payload).unwrap()
            }

            setDescription("")
            toast.success(res?.message || "Updated successfully ✅")
        } catch (error) {
            console.error(error)
            toast.error(error?.data?.message || "Update failed ❌")
        }
    }


    return (
        <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4">{ sections.find((section) => section.key === activeTab)?.title}</h2>

            {/* Tabs */}
            <div className="flex gap-2 mb-4 flex-wrap">
                {sections.map((section) => (
                    <button
                        key={section.key}
                        onClick={() => setActiveTab(section.key)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition
              ${activeTab === section.key
                                ? "bg-[#3698DC] text-white"
                                : "bg-gray-100 hover:bg-gray-200"
                            }`}
                    >
                        {section.title}
                    </button>
                ))}
            </div>

            {/* Textarea */}
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Write description here..."
                rows={6}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Submit Button */}
            <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="mt-4 w-full bg-[#3698DC] hover:bg-blue-700 text-white py-2 rounded-lg font-medium disabled:opacity-50"
            >
                {isLoading ? "Updating..." : "Update Description"}
            </button>
        </div>
    )
}
