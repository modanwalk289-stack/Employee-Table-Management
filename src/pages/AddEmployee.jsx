export default function EmployeeDetails() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white w-[600px] rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-center mb-8">
          Employee Details
        </h1>

        <div className="flex justify-center mb-6">
          <img
            src="https://via.placeholder.com/120"
            alt="Employee"
            className="w-28 h-28 rounded-full border-4 border-blue-500"
          />
        </div>

        <div className="space-y-4">
          <p><span className="font-semibold">Employee ID:</span> EMP101</p>
          <p><span className="font-semibold">Full Name:</span> John Doe</p>
          <p><span className="font-semibold">Email:</span> john@example.com</p>
          <p><span className="font-semibold">Phone:</span> +91 9876543210</p>
          <p><span className="font-semibold">Department:</span> IT</p>
          <p><span className="font-semibold">Designation:</span> Software Engineer</p>
          <p><span className="font-semibold">Salary:</span> ₹50,000</p>
          <p><span className="font-semibold">Joining Date:</span> 22 July 2026</p>

          <p>
            <span className="font-semibold">Status:</span>
            <span className="ml-2 bg-green-100 text-green-700 px-3 py-1 rounded-full">
              Active
            </span>
          </p>
        </div>

        <div className="flex justify-between mt-8">
          <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 cursor-pointer">
            Edit
          </button>

          <button className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 cursor-pointer">
            Back
          </button>
        </div>

      </div>
    </div>
  );
}