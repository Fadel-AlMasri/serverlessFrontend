import React from "react";
const UsersTable = () => {
  let email = "users@example.com";
  let firstName = "John";
  let lastName = "Doe";
  return (
    <div>
      <h1>Users Table</h1>
      <div>
        <div>
          <h1>email</h1>
          <h2>{email}</h2>
        </div>
        <div>
          <h1>firstName</h1>
          <h2>{firstName}</h2>
        </div>
        <div>
          <h1>lastName</h1>
          <h2>{lastName}</h2>
        </div>
      </div>
    </div>
  );
};

export default UsersTable;
