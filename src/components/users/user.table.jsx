import React from "react";
import { Table } from "antd";

const UserTable = (props) => {
  
  const dataUsers = props.dataUsers;

  const columns = [
    {
      title: "_id",
      dataIndex: "_id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
  ];


  return <Table columns={columns} dataSource={dataUsers} rowKey="_id" />;
};

export default UserTable;
