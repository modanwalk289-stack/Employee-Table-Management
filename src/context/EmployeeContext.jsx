import { createContext, useEffect, useState } from "react";

export const EmployeeContext = createContext();

export default function EmployeeProvider({ children }) {
  const [employees, setEmployees] = useState(() => {
    const savedEmployees = localStorage.getItem("employees");

    return savedEmployees
      ? JSON.parse(savedEmployees)
      : [
          {
            id: 101,
            name: "John Doe",
            email: "john@example.com",
            phone: "9876543210",
            department: "IT",
            designation: "Software Engineer",
            salary: "50000",
            joiningDate: "2026-07-22",
            status: "Active",
          },
          {
            id: 102,
            name: "Alice Smith",
            email: "alice@example.com",
            phone: "9123456789",
            department: "HR",
            designation: "HR Manager",
            salary: "45000",
            joiningDate: "2026-07-20",
            status: "Active",
          },
          {
            id: 103,
            name: "Rahul Sharma",
            email: "rahul@example.com",
            phone: "9988776655",
            department: "Finance",
            designation: "Accountant",
            salary: "40000",
            joiningDate: "2026-07-18",
            status: "Inactive",
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem(
      "employees",
      JSON.stringify(employees)
    );
  }, [employees]);

  const deleteEmployee = (id) => {
    setEmployees(
      employees.filter((employee) => employee.id !== id)
    );
  };

  const updateEmployee = (updatedEmployee) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === updatedEmployee.id
          ? updatedEmployee
          : employee
      )
    );
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        setEmployees,
        deleteEmployee,
        updateEmployee,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}