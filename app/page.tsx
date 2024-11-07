'use client';

import { useState } from 'react';
import InputForm from './users/input-form';
import UsersTable from './users/user-list';
import { User } from './users/user';

export default function DataTable() {
  const [users, setUsers] = useState([{ name: 'Georgi', age: 30, university: "TU" }]);

  const handleFormSubmit = (user: User) => {
    console.log(`parent ${JSON.stringify(user)}`);
    setUsers((prevData) => [...prevData, user]);
  };

  const deleteUser = (user: User) => {
    setUsers(users.filter(currUser => currUser !== user));
  }

  return (
    <>
      <InputForm onSubmit={handleFormSubmit} />
      <UsersTable users={users} onDeleteUser={deleteUser} />
    </>
  );
}