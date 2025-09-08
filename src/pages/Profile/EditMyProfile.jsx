import { useState, useEffect } from "react";
import { Button, Form, Input, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import dashProfile from "../../assets/images/dashboard-profile.png";
import { useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import {
  useUpdateProfileMutation,
  useUserProfileQuery,
} from "../../redux/features/useSlice";
import PhoneCountryInput from "../../Components/PhoneCountryInput";

const EditMyProfile = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useUserProfileQuery();
  const [updateProfile, { isLoading: isUpdating }] = useUpdateProfileMutation();
  const [form] = Form.useForm();
  const [profileImage, setProfileImage] = useState(null);

  const IMAGE = import.meta.env.VITE_API_URL;

  // Set form fields when data is available
  useEffect(() => {
    if (data?.data?.user) {
      form.setFieldsValue({
        name: data.data.user.username || "N/A",
        email: data.data.user.email || "N/A",
        phone: data.data.user.phone || "N/A",
      });
      setProfileImage(
        data.data.user.profile_pic
          ? `${IMAGE}${data.data.user.profile_pic}`
          : dashProfile
      );
    }
  }, [data, form, IMAGE]);

  // Handle file upload
  const handleFileChange = ({ file }) => {
    if (file) {
      setProfileImage(URL.createObjectURL(file));
      form.setFieldsValue({ profile_pic: file });
    }
  };

  // Handle form submission
  const onFinish = async (values) => {
    try {
      const formData = new FormData();
      formData.append("username", values.name);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      if (values.profile_pic) {
        formData.append("profile_pic", values.profile_pic);
      }

      const response = await updateProfile(formData).unwrap();
      message.success("Profile updated successfully!");
      navigate(-1); // Redirect to profile page after success
      console.log("Success:", response);
    } catch (error) {
      message.error("Failed to update profile. Please try again.");
      console.error("Failed:", error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    message.error("Please fill in all required fields.");
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="flex items-center gap-2 text-xl">
        <FaAngleLeft onClick={() => navigate(-1)} className="cursor-pointer" />
        <h1>Personal Information</h1>
      </div>
      <div className="rounded-lg py-4 border-lightGray border-2 shadow-lg mt-8 bg-white">
        <div className="space-y-[24px] min-h-[83vh] bg-light-gray rounded-2xl">
          <h3 className="text-2xl text-black mb-4 pl-5 border-b-2 border-lightGray/40 pb-3">
            Personal Information
          </h3>
          <div className="w-full">
            {isLoading && <p className="p-8 text-center">Loading...</p>}
            {isError && (
              <p className="p-8 text-center text-red-500">
                Error fetching profile data. Please try again.
              </p>
            )}
            {!isLoading && !isError && (
              <Form
                form={form}
                name="basic"
                layout="vertical"
                className="w-full grid grid-cols-12 gap-x-10 px-14 py-8"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <div className="col-span-3 space-y-6">
                  <div className="min-h-[300px] flex flex-col items-center justify-center p-8 border border-black bg-lightGray/15">
                    <div className="my-2">
                      <img
                        src={profileImage || dashProfile}
                        alt="Profile"
                        className="h-28 w-28 rounded-full border-4 border-black"
                        onError={(e) => (e.target.src = dashProfile)}
                      />
                    </div>
                    <Form.Item name="profile_pic" noStyle>
                      <Upload
                        accept="image/*"
                        showUploadList={false}
                        beforeUpload={() => false} // Prevent auto-upload
                        onChange={handleFileChange}
                      >
                        <Button icon={<UploadOutlined />}>Upload Profile Picture</Button>
                      </Upload>
                    </Form.Item>
                    <h5 className="text-lg text-[#222222]">Profile</h5>
                    <h4 className="text-2xl text-[#222222]">
                      {data?.data?.user?.username || "Admin"}
                    </h4>
                  </div>
                </div>
                <div className="col-span-9 space-y-[14px] w-full">
                  <Form.Item
                    className="text-lg font-medium text-black -mb-1"
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: "Please enter your name" }]}
                  >
                    <Input size="large" className="h-[53px] rounded-lg" />
                  </Form.Item>
                  <Form.Item
                    className="text-lg font-medium text-black"
                    label="Email"
                    name="email"
                    rules={[
                      { required: true, message: "Please enter your email" },
                      { type: "email", message: "Please enter a valid email" },
                    ]}
                  >
                    <Input size="large" className="h-[53px] rounded-lg" />
                  </Form.Item>
                  <Form.Item
                    className="text-lg text-[#222222] font-medium"
                    label="Phone Number"
                    name="phone"
                    rules={[{ required: true, message: "Please enter your phone number" }]}
                  >
                    <PhoneCountryInput />
                  </Form.Item>
                  <Form.Item className="flex justify-end pt-4">
                    <Button
                      type="primary"
                      htmlType="submit"
                      size="large"
                      className="px-8 bg-black text-white hover:bg-black/90 rounded-full font-semibold"
                      loading={isUpdating}
                    >
                      Save Changes
                    </Button>
                  </Form.Item>
                </div>
              </Form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EditMyProfile;