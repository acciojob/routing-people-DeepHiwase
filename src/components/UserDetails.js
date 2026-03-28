import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUserDetailsById } from "../api/users.api";

export default function UserDetails() {
  const [user, setUser] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchUserDetailsById(id).then((result) => setUser(result));
  }, [id]);

  return (
    <>
      {user === null ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1>User Details</h1>

          <p>
            <strong>Name:</strong> {user.name}{" "}
          </p>
          <p>
            <strong>Username:</strong> {user.username}{" "}
          </p>
          <p>
            <strong>Email:</strong> {user.email}{" "}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}{" "}
          </p>
          <p>
            <strong>Website:</strong> {user.website}{" "}
          </p>
        </div>
      )}
    </>
  );
}
