import React from 'react'
import UserTable from '../components/users/user.table'
import UserForm from '../components/users/user.form'

const UsersPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        padding: "10px",
      }}
    >
      <UserForm />
      <UserTable />
    </div>
  );
}

export default UsersPage