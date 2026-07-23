import { Link } from "react-router-dom";
import { useContext, useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EmployeeContext } from "../context/EmployeeContext";
export default function EmployeeTable({ employees }) {
const { deleteEmployee } = useContext(EmployeeContext);

const [selectedId, setSelectedId] = useState(null);
const [showModal, setShowModal] = useState(false);

  return (



    <div className="w-full bg-white shadow-lg rounded-xl p-6 mt-6">
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Department</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id} className="border-b hover:bg-gray-50">
              <td className="p-3">{employee.id}</td>

              <td className="p-3">{employee.name}</td>

              <td className="p-3">{employee.department}</td>

              <td className="p-3">{employee.email}</td>

              <td className="p-3">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    employee.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {employee.status}
                </span>
              </td>

              <td className="p-3 text-center">
                <Link to={`/edit-employee/${employee.id}`}>
                  <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 cursor-pointer mr-2">
                    Edit
                  </button>
                </Link>

                <button 
                onClick={()=> {
                    setSelectedId(employee.id);
                    setShowModal(true);
                }}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 cursor-pointer">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
    <div className="bg-white w-[400px] rounded-xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-4">
        Delete Employee
      </h2>

      <p className="text-gray-600 mb-6">
        Are you sure you want to delete this employee?
      </p>

      <div className="flex justify-end gap-4">

        <button
          onClick={() => setShowModal(false)}
          className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600 cursor-pointer"
        >
          Cancel
        </button>

        <button
          onClick={() => {
            deleteEmployee(selectedId);
            
            setShowModal(false);
          }}
          className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 cursor-pointer"
        >
          Delete
        </button>

      </div>

    </div>
  </div>
)}
    </div>
  );
}