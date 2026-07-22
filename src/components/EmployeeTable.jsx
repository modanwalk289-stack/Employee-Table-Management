import { Link } from "react-router-dom";

export default function EmployeeTable({ employees }) {
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
                <Link to="/edit-employee">
                  <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 cursor-pointer mr-2">
                    Edit
                  </button>
                </Link>

                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 cursor-pointer">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}