import React from "react";
import "../../styles/dashboard.css";

export default function SummaryCards({ employees }) {
  const total = employees.length;
  const activeCount = employees.filter(emp => emp.active).length;
  const inactiveCount = total - activeCount;

  return (
    <div className="summary-container">
      <div className="card">
        <h3>Total Employees</h3>
        <p>{total}</p>
      </div>

      <div className="card">
        <h3>Active</h3>
        <p>{activeCount}</p>
      </div>

      <div className="card">
        <h3>Inactive</h3>
        <p>{inactiveCount}</p>
      </div>
    </div>
  );
}
