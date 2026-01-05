import React, { useEffect, useState } from "react";
import "../../styles/form.css";

const initialState = {
  fullName: "",
  gender: "",
  dob: "",
  state: "",
  active: true,
  profileImage: "",
};

export default function EmployeeForm({ onSave, editingEmployee, onCancel }) {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState("");

  useEffect(() => {
    if (editingEmployee) {
      setForm(editingEmployee);
    }
  }, [editingEmployee]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm({ ...form, profileImage: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.fullName || !form.gender || !form.dob || !form.state) {
      setError("All fields are required");
      return;
    }

    onSave(form);
    setForm(initialState);
    setError("");
  };

  return (
    <div className="employee-form-wrapper">
      <form className="employee-form" onSubmit={handleSubmit}>
        <h3>{editingEmployee ? "Edit Employee" : "Add Employee"}</h3>

        {error && <p className="error">{error}</p>}

        <input
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={handleChange}
        />

        <select name="gender" value={form.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>

        <input
          type="date"
          name="dob"
          value={form.dob}
          onChange={handleChange}
        />

        <select name="state" value={form.state} onChange={handleChange}>
          <option value="">Select State</option>
          <option>Alabama</option>
          <option>Alaska</option>
          <option>Arizona</option>
          <option>California</option>
          <option>Colorado</option>
          <option>Florida</option>
          <option>Georgia</option>
          <option>Illinois</option>
          <option>New Jersey</option>
          <option>New York</option>
          <option>Texas</option>
          <option>Washington</option>
        </select>

        <label>
          Active
          <input
            type="checkbox"
            name="active"
            checked={form.active}
            onChange={handleChange}
          />
        </label>

        <input type="file" accept="image/*" onChange={handleImage} />

        {form.profileImage && (
          <img src={form.profileImage} alt="" className="preview" />
        )}

        <div className="actions">
          <button type="submit">Save</button>
          {editingEmployee && (
            <button type="button" onClick={onCancel}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
