import React, { useEffect, useState } from "react";
import Navbar from "../components/dashboard/Navbar";
import SummaryCards from "../components/dashboard/SummaryCards";
import EmployeeForm from "../components/dashboard/EmployeeForm";
import EmployeeTable from "../components/dashboard/EmployeeTable";
import Filters from "../components/dashboard/Filters";
import PrintButton from "../components/dashboard/PrintButton";
import { initialEmployees } from "../data/employeeData";
import "../styles/dashboard.css";

export default function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);

  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("employees");
    if (stored) {
      setEmployees(JSON.parse(stored));
    } else {
      localStorage.setItem("employees", JSON.stringify(initialEmployees));
      setEmployees(initialEmployees);
    }
  }, []);

  const saveEmployees = (list) => {
    setEmployees(list);
    localStorage.setItem("employees", JSON.stringify(list));
  };

  const handleSave = (emp) => {
    if (editingEmployee) {
      const updated = employees.map((e) => (e.id === emp.id ? emp : e));
      saveEmployees(updated);
      setEditingEmployee(null);
    } else {
      saveEmployees([
        ...employees,
        { ...emp, id: Math.floor(10000 + Math.random() * 90000) },
      ]);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      saveEmployees(employees.filter((e) => e.id !== id));
    }
  };

  const handleToggle = (id) => {
    saveEmployees(
      employees.map((e) => (e.id === id ? { ...e, active: !e.active } : e))
    );
  };

  const filteredEmployees = employees.filter((emp) => {
    const matchesSearch = emp.fullName
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesGender = gender ? emp.gender === gender : true;

    const matchesStatus =
      status === "" ? true : status === "active" ? emp.active : !emp.active;

    return matchesSearch && matchesGender && matchesStatus;
  });

  return (
    <>
      <Navbar />

      <div className="dashboard">
        {/* <SummaryCards employees={employees} /> */}

        {/* Search & Filters */}
        <Filters
          search={search}
          setSearch={setSearch}
          gender={gender}
          setGender={setGender}
          status={status}
          setStatus={setStatus}
        />

        {/*  Print Button */}
        <PrintButton />

        {/* Employee Table */}
        <EmployeeTable
          employees={filteredEmployees}
          onEdit={setEditingEmployee}
          onDelete={handleDelete}
          onToggle={handleToggle}
        />

        <EmployeeForm
          onSave={handleSave}
          editingEmployee={editingEmployee}
          onCancel={() => setEditingEmployee(null)}
        />
      </div>
    </>
  );
}
