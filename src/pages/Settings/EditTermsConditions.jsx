import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState, useEffect } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import Quill from "quill";
import { useTermsQuery, useUpdateTermsMutation } from "../../redux/features/privacySlice";

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

const EditTermsConditions = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const { data, isLoading, isError } = useTermsQuery();
  const [updateTerms, { isLoading: isUpdating }] = useUpdateTermsMutation();

  // Set default content when data is fetched
  useEffect(() => {
    if (data?.data?.description) {
      setContent(data.data.description);
    }
  }, [data]);

  // Handle update submission
  const handleUpdate = async () => {
    try {
      await updateTerms({ id: data?.data?.id, description: content }).unwrap();
      navigate(-1); // Redirect to a relevant page after update
    } catch (error) {
      console.error("Failed to update terms and conditions:", error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading terms and conditions.</div>;

  return (
    <>
      <div onClick={() => navigate(-1)} className="flex items-center gap-2 text-xl">
        <FaAngleLeft />
        <h1>Terms & Conditions</h1>
      </div>
      <div className="rounded-lg py-4 border-lightGray border-2 shadow-lg mt-8 bg-white">
        <div className="space-y-[24px] min-h-[83vh] bg-light-gray rounded-2xl">
          <h3 className="text-2xl text-black mb-4 border-b-2 border-lightGray/40 pb-3 pl-16">
            Terms & Conditions Edit
          </h3>
          <div className="w-full px-16">
            <div className="h-full border border-gray-400 rounded-md">
              <ReactQuill
                placeholder="Enter your updated terms & conditions..."
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

export default EditTermsConditions;