import { Link } from "react-router-dom";
export default function EmployeeTable() {
  return (
    <div className="bg-white  w-full shadow-lg rounded-xl p-8 mt-6 table-auto">
      <table className="w-full border-collapse">
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
          <tr className="border-b">
            <td className="p-3">101</td>
            <td className="p-3">John Doe</td>
            <td className="p-3">IT</td>
            <td className="p-3">john@example.com</td>
            <td className="p-3">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                Active
              </span>
            </td>
            <td className="p-3  text-center">
                <Link to="./edit-employee">
              <button className="bg-yellow-500 cursor-pointer text-white px-3 py-1 rounded mr-2">
                Edit
              </button>
              </Link>
              <button className="bg-red-500 cursor-pointer text-white px-3 py-1 rounded">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}