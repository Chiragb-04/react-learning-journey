import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserData = () => {
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [editedUserData, setEditedUserData] = useState({});
  const navigate = useNavigate();

  const handleEdit = (user) => {
    setEditingUserId(user.id);
    setEditedUserData(user);
  };

  const handleUpdateChange = (e) => {
    setEditedUserData({ ...editedUserData, [e.target.name]: e.target.value });
  };

  const handleUserUpdate = async () => {
    try {
      await fetch(`http://localhost:3001/users/${editingUserId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editedUserData),
      });
      const updatedUsers = users.map((user) => (user.id === editingUserId ? editedUserData : user));

      setUsers(updatedUsers);
      setEditingUserId(null);
      window.alert("User updated successfully!");
    } catch (err) {
      console.error("Error updating user:", err);
    }
  };
  const handleDeleteUser = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (!confirmDelete) return;

    try {
      await fetch(`http://localhost:3001/users/${id}`, {
        method: "DELETE",
      });

      setUsers(users.filter((user) => user.id !== id));
    } catch (err) {
      console.error("Error deleting user:", err);
    }
  };

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center">User Details</h2>
      <button
        className="btn btn-primary mb-3"
        onClick={() => navigate("/userData/add")}
      >
        Add New User
      </button>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Phone No.</th>
            <th>Email Id</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              {editingUserId === user.id ? (
                <>
                  <td>
                    <input
                      name="Name"
                      value={editedUserData.Name}
                      onChange={handleUpdateChange}
                    />
                  </td>
                  <td>
                    <input
                      name="Age"
                      value={editedUserData.Age}
                      onChange={handleUpdateChange}
                    />
                  </td>
                  <td>
                    <input
                      name="Phone"
                      value={editedUserData.Phone}
                      onChange={handleUpdateChange}
                    />
                  </td>
                  <td>
                    <input
                      name="Email"
                      value={editedUserData.Email}
                      onChange={handleUpdateChange}
                    />
                  </td>
                  <td>
                    <input
                      name="Address"
                      value={editedUserData.Address}
                      onChange={handleUpdateChange}
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-success btn-sm"
                      onClick={handleUserUpdate}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-secondary btn-sm ms-1"
                      onClick={() => setEditingUserId(null)}
                    >
                      Cancel
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td>{user.Name}</td>
                  <td>{user.Age}</td>
                  <td>{user.Phone}</td>
                  <td>{user.Email}</td>
                  <td>{user.Address}</td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => handleEdit(user)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm ms-1"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserData;
