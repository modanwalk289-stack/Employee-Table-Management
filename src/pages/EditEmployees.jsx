export default function EditEmployee() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">
      <div className="bg-white w-[500px] rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-center mb-8">
          Edit Employee
        </h1>

        <div className="space-y-4">

          <div>
            <label className="block font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              defaultValue="John Doe"
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              defaultValue="john@example.com"
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Phone
            </label>
            <input
              type="text"
              defaultValue="9876543210"
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Department
            </label>
            <input
              type="text"
              defaultValue="IT"
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Designation
            </label>
            <input
              type="text"
              defaultValue="Software Engineer"
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Salary
            </label>
            <input
              type="number"
              defaultValue="50000"
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Joining Date
            </label>
            <input
              type="date"
              defaultValue="2026-07-22"
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">
              Status
            </label>

            <select className="w-full border rounded-lg p-3">
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          <div className="flex justify-between mt-8">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 cursor-pointer">
              Update Employee
            </button>

            <button className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 cursor-pointer">
              Cancel
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}