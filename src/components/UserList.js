import React, { useEffect, useState } from "react";
import { fetchUserList } from "../api/users.api";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUserList().then((result) => setUsers(result));
  }, [users]);

  return (
    <>
      {users.length <= 0 ? (
        <div>Loading...</div>
      ) : (
        users.map((user) => (
          <div>
            <h1>User List</h1>

            <ul>
              <li>
                <a href={`/users/${user.id}`}>{user.name}</a>
              </li>
            </ul>
          </div>
        ))
      )}
    </>
  );
}
