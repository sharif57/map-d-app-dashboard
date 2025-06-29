import { useState } from "react";
import { Table, Modal, Button } from "antd";
import { Eye } from "lucide-react";

const User = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const showModal = (data) => {
    setSelectedUser(data);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: () => (
        <img
          src="/country.png"
          alt="User"
          style={{  borderRadius: "50%" , textAlign: "center",paddingLeft: '30px' }}
        />
      ),
      align: "center",
    },
    {
      title: "#SI No.",
      dataIndex: "transIs",
      key: "transIs",
      render: (text) => <a>{text}</a>,
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
          <div className="flex items-center gap-4 ">
            <Eye />
          </div>
        </Button>
      ),
    },
  ];

  const data = Array.from({ length: 17 }, (_, index) => ({
    transIs: `${index + 1}`,
    name: "Henry",
    born: "1990-01-01",
    phone: `123-456-789${index}`,
    email: "sharif@gmail.com",
    living: "Standard",
    visited: "$50",
    date: "16 Apr 2024",
    userId: `U-${index + 1}`,
  }));

  return (
    <div>
      <div className="rounded-lg border py-4   mt-8 recent-users-table text-white bg-white">
        {/* Ant Design Table */}
        <h1 className="text-2xl font-medium mb-4 text-black pl-4">User List</h1>
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ position: ["bottomCenter"] }}
          className="rounded-2xl  text-white"
          rowKey="userId"
        />

        {/* Modal */}
        <Modal
          title={
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-center">
                User Details
              </span>
              {/* <CloseOutlined
              className="text-lg cursor-pointer"
              onClick={handleCancel}
            /> */}
            </div>
          }
          open={isModalOpen}
          onCancel={handleCancel}
          footer={null}
          className="custom-modal"
        >
          {selectedUser && (
            <div className="flex flex-col gap-4  ">
              {/* User Details */}
              <div className="flex justify-between items-center ">
                <span className=" font-medium">User ID:</span>
                <span className="">{selectedUser.userId}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className=" font-medium">Date:</span>
                <span className="">{selectedUser.date}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className=" font-medium">User Name:</span>
                <span className="">{selectedUser.name}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className=" font-medium">Transaction Amount:</span>
                <span className="">{selectedUser.transactionAmount}</span>
              </div>

              {/* Download Button */}
              <Button
                // type="primary"
                className="bg-[#101010] py-6 text-white w-full hover:bg-gray-800"
              >
                Download
              </Button>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default User;
