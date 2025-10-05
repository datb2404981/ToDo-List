import React, { useState } from "react";
import { Table, Space } from "antd";
import { EditOutlined } from "@ant-design/icons";
import UpdateUserModal from "./update.user.modal";
import ViewUserDetail from "./view.user.detail";
import DeleteUser from "./detele.user";

const UserTable = ({ dataUsers, loadUser }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isDrawer, setIsDrawer] = useState(false);

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };
  
  
  const handleViewClick = (user) => {
    setSelectedUser(user);
    setIsDrawer(true);
  };


  const columns = [
    {
      title: "_id",
      dataIndex: "_id",
      render: (_, record) => (
        <a
          onClick={() => {
            handleViewClick(record);
          }}
        >
          {record._id}
        </a>
      ),
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <EditOutlined
            style={{ color: "blue", cursor: "pointer" }}
            onClick={() => handleEditClick(record)}
          />
          <DeleteUser user={record} loadUser={loadUser} />
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={dataUsers} rowKey="_id" />

      {isModalOpen && (
        <UpdateUserModal
          open={isModalOpen}
          user={selectedUser}
          onCancel={() => setIsModalOpen(false)}
          loadUser={loadUser}
        />
      )}

      {isDrawer && (
        <ViewUserDetail
          user={selectedUser}
          open={isDrawer}
          onClose={() => setIsDrawer(false)}
        />
      )}
      
    </>
  );
};

export default UserTable;
