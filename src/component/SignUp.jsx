import React, { useState } from "react";
import axios from "axios";
// import { Alert } from "react-bootstrap";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    name: { firstname: "", lastname: "" },
    address: { city: "", street: "", number: 0, zipcode: "" },
    phone: "",
  });

  const [message, setMessage] = useState("");
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData({
        ...formData,
        [parent]: { ...formData[parent], [child]: value },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://fakestoreapi.com/users",
        formData
      );
      setMessage(`Sign-up successful! User ID: ${response.data.id}`);
      setShowSnackbar(true);

      // Clear form after successful signup
      setFormData({
        email: "",
        username: "",
        password: "",
        name: { firstname: "", lastname: "" },
        address: { city: "", street: "", number: 0, zipcode: "" },
        phone: "",
      });

      // Automatically hide snackbar after 3 seconds
      setTimeout(() => {
        setShowSnackbar(false);
      }, 3000);
    } catch (error) {
      setMessage("Sign-up failed. Please try again.");
      setShowSnackbar(true);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card mx-auto" style={{ maxWidth: "600px" }}>
        <div className="card-body">
          <h2 className="card-title text-center">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="form-control"
                placeholder="Choose a username"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
                placeholder="Create a password"
                required
              />
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  name="name.firstname"
                  value={formData.name.firstname}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  name="name.lastname"
                  value={formData.name.lastname}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">City</label>
                <input
                  type="text"
                  name="address.city"
                  value={formData.address.city}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Street</label>
                <input
                  type="text"
                  name="address.street"
                  value={formData.address.street}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <button type="submit" className="btn btn-success w-100">
              Sign Up
            </button>
          </form>
          {showSnackbar && (
            <Alert
              variant={
                message.startsWith("Sign-up successful") ? "success" : "danger"
              }
              className="mt-3"
            >
              {message}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
