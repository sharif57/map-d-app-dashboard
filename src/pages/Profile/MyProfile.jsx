import { Button, Form, Input } from "antd";
import dashProfile from "../../assets/images/dashboard-profile.png";
import { Outlet, useNavigate } from "react-router-dom";
import { FaAngleLeft, FaRegEdit } from "react-icons/fa";
import { useUserProfileQuery } from "../../redux/features/useSlice";
import { useEffect } from "react";

const MyProfile = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useUserProfileQuery();
  const [form] = Form.useForm();

  const IMAGE = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (data?.data?.user) {
      form.setFieldsValue({
        name: data.data.user.username || "N/A",
        email: data.data.user.email || "N/A",
        phone: data.data.user.phone || "N/A",
      });
    }
  }, [data, form]);

  const profileImage = data?.data?.user?.profile_pic
    ? `${IMAGE}${data.data.user.profile_pic}`
    : dashProfile;

  return (
    <>
      <div className="flex items-center gap-2 text-xl">
        <FaAngleLeft />
        <h1>Personal Information</h1>
      </div>
      <div className="rounded-lg py-4 border-lightGray border-2 shadow-lg mt-8 bg-white">
        <h3 className="text-2xl text-black mb-4 pl-5 border-b-2 border-lightGray/40 pb-3">
          Personal Information
        </h3>
        <div>
          <div className="space-y-[24px] min-h-[83vh] bg-light-gray rounded-2xl">
            <div className="w-full">
              <div className="py-4 px-8 flex justify-end items-center">
                <Button
                  onClick={() => navigate(`edit`)}
                  size="large"
                  type="default"
                  className="px-8 bg-black text-white hover:bg-black/90 rounded-full font-semibold"
                >
                  <FaRegEdit />
                  Edit Profile
                </Button>
              </div>

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
                  autoComplete="off"
                >
                  <div className="col-span-3 space-y-6">
                    <div className="min-h-[300px] flex flex-col items-center justify-center p-8 border border-black bg-lightGray/15">
                      <div className="my-2">
                        <img
                          src={profileImage}
                          alt="Profile"
                          className="h-28 w-28 rounded-full border-4 border-black"
                          onError={(e) => (e.target.src = dashProfile)} // Fallback on error
                        />
                      </div>
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
                    >
                      <Input
                        readOnly
                        size="large"
                        className="h-[53px] rounded-lg"
                      />
                    </Form.Item>
                    <Form.Item
                      className="text-lg font-medium text-black"
                      label="Email"
                      name="email"
                    >
                      <Input
                        readOnly
                        size="large"
                        className="h-[53px] rounded-lg"
                      />
                    </Form.Item>
                    <Form.Item
                      className="text-lg font-medium text-black"
                      label="Phone"
                      name="phone"
                    >
                      <Input
                        readOnly
                        size="large"
                        className="h-[53px] rounded-lg"
                      />
                    </Form.Item>
                  </div>
                </Form>
              )}
            </div>
          </div>
        </div>
        <div className="p-[24px] pt-0.5">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MyProfile;