// import { Button } from "antd";
// import { useNavigate } from "react-router-dom";
// import PageHeading from "../../Components/PageHeading";
// import { useState } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

// const EditAboutUs = () => {
//   const navigate = useNavigate();
//   const [content, setContent] = useState("");
//   const placeholder = "Enter your update about us...";
//   console.log(content);
//   return (
//     <div className="min-h-[75vh] flex flex-col justify-between gap-6">
//       <div className="space-y-6">
//         <PageHeading title={"Edit About Us"} backPath={-1} />

//         <div className="h-full">
//           <ReactQuill
//             placeholder={placeholder}
//             theme="snow"
//             value={content}
//             onChange={(value) => setContent(value)}
//             className="h-[50vh]"
//           />
//         </div>
//       </div>
//       <div className="flex justify-end">
//         <Button
//           size="large"
//           type="primary"
//           htmlType="submit"
//           className="px-8 w-[250px]"
//         >
//           Save Changes
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default EditAboutUs;
import { Button } from "antd";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import Quill from "quill";
import { useState, useEffect } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { useAboutUsQuery, useUpdateAboutUsMutation } from "../../redux/features/privacySlice";

// Import and register 'size' style attributor
const Size = Quill.import("attributors/style/size");
Size.whitelist = ["14px", "16px", "18px"]; // Custom font sizes
Quill.register(Size, true);

const modules = {
  toolbar: {
    container: [
      [{ size: ["14px", "16px", "18px"] }], // Use whitelisted sizes
      [{ color: [] }], // Text color dropdown
      ["bold", "italic", "underline", "strike"], // Formatting options
      [{ align: [] }],
      ["image", "link"],
      [{ list: "bullet" }],
    ],
    handlers: {
      align: function (value) {
        this.quill.format("align", value);
      },
    },
  },
};

const formats = [
  "size",
  "color",
  "align",
  "bold",
  "italic",
  "underline",
  "link",
  "image",
  "list",
];

const EditAboutUs = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const { data, isLoading, isError } = useAboutUsQuery();
  const [updateAboutUs, { isLoading: isUpdating }] = useUpdateAboutUsMutation();

  // Set default content when data is fetched
  useEffect(() => {
    if (data?.data?.description) {
      setContent(data.data.description);
    }
  }, [data]);

  // Handle update submission
  const handleUpdate = async () => {
    try {
      await updateAboutUs({ id: data?.data?.id, description: content }).unwrap();
      // Optionally show a success message (e.g., using antd's message component)
      navigate(-1); // Redirect to a relevant page after update
    } catch (error) {
      // Handle error (e.g., show error message)
      console.error("Failed to update about us:", error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading about us.</div>;

  return (
    <>
      <div onClick={() => navigate(-1)} className="flex cursor-pointer items-center gap-2 text-xl">
        <FaAngleLeft />
        <h1>Edit About Us</h1>
      </div>
      <div className="rounded-lg py-4 border-lightGray border-2 shadow-lg mt-8 bg-white">
        <div className="space-y-[24px] min-h-[83vh] bg-light-gray rounded-2xl">
          <h3 className="text-2xl text-black mb-4 border-b-2 border-lightGray/40 pb-3 pl-16">
            Edit About Us
          </h3>
          <div className="w-full px-16">
            <div className="h-full border border-gray-400 rounded-md">
              <ReactQuill
                placeholder="Enter your updated about us..."
                theme="snow"
                value={content}
                onChange={(value) => setContent(value)}
                modules={modules}
                formats={formats}
                className="custom-quill-editor"
              />
            </div>
          </div>
          <div className="flex justify-end pt-8 pr-16">
            <Button
              onClick={handleUpdate}
              size="large"
              type="primary"
              disabled={isUpdating}
              className="px-8 bg-black text-white hover:bg-black/90 rounded-full font-semibold w-1/4"
            >
              {isUpdating ? "Updating..." : "Update"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditAboutUs;