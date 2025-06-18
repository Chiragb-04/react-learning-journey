import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialFormState = {
  Name: "",
  Age: "",
  Phone: "",
  Email: "",
  Address: "",
};

const AddUser = () => {
  const [form, setForm] = useState(initialFormState);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      window.alert("User added successfully!");
      setForm(initialFormState);
      navigate("/userData");
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <div>
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <div className="row g-2">
          {Object.keys(initialFormState).map((key, i) => (
            <div className="col-md-2" key={i}>
              <input
                type="text"
                name={key}
                placeholder={key}
                className="form-control"
                value={form[key]}
                onChange={handleChange}
                required
              />
            </div>
          ))}
          <div className="col-md-2">
            <button type="submit" className="btn btn-success w-100">
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
