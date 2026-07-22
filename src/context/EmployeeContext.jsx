import { createContext, useState } from "react";

export const EmployeeContext = createContext();

export default function EmployeeProvider({ children }) {
  const [employees, setEmployees] = useState([
    {
      id: 101,
      name: "John Doe",
      department: "IT",
      email: "john@example.com",
      status: "Active",
    },
    {
      id: 102,
      name: "Alice Smith",
      department: "HR",
      email: "alice@example.com",
      status: "Active",
    },
    {
      id: 103,
      name: "Rahul Sharma",
      department: "Finance",
      email: "rahul@example.com",
      status: "Inactive",
    },
  ]);

  return (
    <EmployeeContext.Provider value={{ employees, setEmployees }}>
      {children}
    </EmployeeContext.Provider>
  );
}