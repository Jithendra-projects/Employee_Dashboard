import React from "react";
import "../../styles/filters.css";

export default function Filters({
  search,
  setSearch,
  gender,
  setGender,
  status,
  setStatus
}) {
  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="">All Genders</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="">All Status</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
    </div>
  );
}
