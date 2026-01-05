import React from "react";

export default function PrintButton() {
  return (
    <button onClick={() => window.print()}>
      Print Employees
    </button>
  );
}
