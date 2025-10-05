import React, { useEffect, useState } from 'react'
import UserTable from '../components/users/user.table'
import UserForm from '../components/users/user.form'
import { fetchAllUserAPI } from '../services/api.service';

const UsersPage = () => {

  const [dataUsers, setDataUser] = useState([]);

  const loadUser = async () => {
    try {
      const res = await fetchAllUserAPI();
      // giả sử API trả về { statusCode, message, data: [...] }
      setDataUser(res.data.data || []);
    } catch (error) {
      console.error("❌ Lỗi khi fetch user:", error);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        padding: "10px",
      }}
    >
      <UserForm loadUser={loadUser} />
      <UserTable dataUsers={dataUsers} loadUser={loadUser} />
    </div>
  );
}

export default UsersPage