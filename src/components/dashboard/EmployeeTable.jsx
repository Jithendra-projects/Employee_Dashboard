import React from "react";
import "../../styles/table.css";

export default function EmployeeTable({
  employees,
  onEdit,
  onDelete,
  onToggle
}) {

  if (employees.length === 0) {
    return <p>No employees match the selected filters.</p>;
  }

  return (
    <table className="employee-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Profile</th>
          <th>Name</th>
          <th>Gender</th>
          <th>DOB</th>
          <th>State</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {employees.map((emp) => (
          <tr key={emp.id}>
            <td>{emp.id}</td>

            <td>
              {emp.profileImage ? (
                <img
                  src={emp.profileImage}
                  alt="Profile"
                  className="avatar"
                />
              ) : (
                "-"
              )}
            </td>

            <td>{emp.fullName}</td>
            <td>{emp.gender}</td>
            <td>{emp.dob}</td>
            <td>{emp.state}</td>

            <td>
              <input
                type="checkbox"
                checked={emp.active}
                onChange={() => onToggle(emp.id)}
              />
            </td>

            <td>
              <button onClick={() => onEdit(emp)}>Edit</button>
              <button
                className="danger"
                onClick={() => onDelete(emp.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
