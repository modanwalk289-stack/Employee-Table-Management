import Navbar from "../components/Navbar";
import DashboardCard from "../components/DashboardCard";
import SearchBar from "../components/SearchBar";
import EmployeeTable from "../components/EmployeeTable";
import { useContext, useState } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
// import DeleteModal from "../components/DeleteModal";

export default function Dashboard() {

    const { employees } = useContext(EmployeeContext);
    const [search, setSearch] = useState("");

    const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase())
    );


  return (
    <>
      <Navbar />

      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">
          Employee Management Dashboard
        </h1>

       
        <div className="grid grid-cols-4 gap-6">
          <DashboardCard title="Total Employees" value="120" />
          <DashboardCard title="Departments" value="8" />
          <DashboardCard title="Active Employees" value="112" />
          <DashboardCard title="New Joinees" value="15" />
        </div>

       
        <SearchBar search ={search} setSearch={setSearch} />

      
        <EmployeeTable  employees={filteredEmployees}/>

        
      </div>
    </>
  );
}