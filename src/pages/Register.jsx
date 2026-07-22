import { UserPlus } from "lucide-react";
import { Link } from "react-router-dom";
export default function Register() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-96 bg-white p-8 rounded-xl shadow-lg">
        
        <h2 className="flex items-center justify-center gap-2 text-2xl font-bold mb-6">
          <UserPlus size={28} />
          Register | Admin
        </h2>

        <div className="mb-4">
          <label className="block mb-2 font-medium">Full Name</label>
          <input
            type="text"
            placeholder="Enter Full Name"
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium">Username</label>
          <input
            type="text"
            placeholder="Enter Username"
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 font-medium">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
          Register
        </button>

        <p className="text-center mt-4">
          Already have an account?{" "}
         <Link to="/">Sign In</Link>
        </p>
      </div>
    </div>
  );
}