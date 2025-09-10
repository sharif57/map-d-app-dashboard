
import { useState, useRef } from "react";
import { Table, Modal, Button } from "antd";
import { Eye } from "lucide-react";
import { useUserListQuery } from "../../../redux/features/useSlice";
import html2canvas from "html2canvas";

const User = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const tableRef = useRef(null);

  // Fetch user list data with pagination
  const { data: userList, isLoading, isError } = useUserListQuery({ page: currentPage });
  console.log(userList, "userList");

  // Map API data to table dataSource
  const dataSource = userList?.results?.map((user, index) => ({
    key: user.id,
    transIs: `${(currentPage - 1) * 20 + index + 1}`, // Assuming 20 items per page
    name: user.full_name || "N/A",
    born: user.dob || "N/A",
    phone: user.phone || "N/A",
    email: user.email || "N/A",
    living: user.living || "N/A",
    visited: user.visited || 0,
    date: new Date(user.date_joined).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
    userId: `U-${user.id}`,
    profile_pic: user.profile_pic || "/media/default_profile_pic.png",
  })) || [];

  // Handle modal show
  const showModal = (data) => {
    setSelectedUser(data);
    setIsModalOpen(true);
  };

  // Handle modal close
  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Download table as PNG
  const handleDownloadPNG = () => {
    if (tableRef.current) {
      html2canvas(tableRef.current).then((canvas) => {
        const link = document.createElement("a");
        link.download = "user-list.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
      });
    }
  };

  const IMAGE = import.meta.env.VITE_API_URL

  const columns = [
    {
      title: "Image",
      dataIndex: "profile_pic",
      key: "profile_pic",
      render: (profile_pic) => (
        <img
          src={IMAGE + profile_pic}
          alt="User"
          style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover" }}
        />
      ),
      align: "center",
    },
    {
      title: "#SI No.",
      dataIndex: "transIs",
      key: "transIs",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Born",
      dataIndex: "born",
      key: "born",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Living",
      dataIndex: "living",
      key: "living",
    },
    {
      title: "Visited",
      dataIndex: "visited",
      key: "visited",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Action",
      key: "Action",
      align: "center",
      render: (_, data) => (
        <Button type="link" onClick={() => showModal(data)}>
          <Eye />
        </Button>
      ),
    },
  ];

  return (
    <div>
      <div className="rounded-lg border py-4 mt-8 recent-users-table bg-white">
        <div className="flex justify-between items-center px-4 mb-4">
          <h1 className="text-2xl font-medium text-black">User List</h1>
          {/* <Button
            className="bg-[#101010] text-white hover:bg-gray-800"
            onClick={handleDownloadPNG}
          >
            Download as PNG
          </Button> */}
        </div>
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error fetching user list. Please try again.</p>}
        {!isLoading && !isError && (
          <div ref={tableRef}>
            <Table
              columns={columns}
              dataSource={dataSource}
              pagination={{
                position: ["bottomCenter"],
                current: currentPage,
                total: userList?.count || 0,
                pageSize: 20, // Assuming 20 items per page based on API response
                onChange: handlePageChange,
                showSizeChanger: false,
              }}
              className="rounded-2xl"
              rowKey="key"
            />
          </div>
        )}
        <Modal
          title={
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-center">User Details</span>
            </div>
          }
          open={isModalOpen}
          onCancel={handleCancel}
          footer={null}
          className="custom-modal"
        >
          {selectedUser && (
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <span className="font-medium">User ID:</span>
                <span>{selectedUser.userId}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Date:</span>
                <span>{selectedUser.date}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">User Name:</span>
                <span>{selectedUser.name}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Email:</span>
                <span>{selectedUser.email}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Phone:</span>
                <span>{selectedUser.phone}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Living:</span>
                <span>{selectedUser.living}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Visited:</span>
                <span>{selectedUser.visited}</span>
              </div>
              <Button
                className="bg-[#101010] py-6 text-white w-full hover:bg-gray-800"
                onClick={handleDownloadPNG}
              >
                Download Table as PNG
              </Button>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default User;
