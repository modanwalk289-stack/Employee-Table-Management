import { User } from "lucide-react";
import {Link} from "react-router-dom"
export default function Login() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="w-96 bg-white rounded-xl shadow-lg p-8">
        
        <h2 className="flex items-center justify-center gap-2 text-2xl font-bold mb-6">
          <User size={28} />
          Sign In | Admin
        </h2>

        <div className="mb-4">
          <label className="block mb-2 font-medium">Username</label>
          <input
            type="text"
            placeholder="Enter Username"
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-2">
          <label className="block mb-2 font-medium">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-end mb-6">
          <a href="#" className="text-sm text-blue-600 hover:underline">
            Forgot Password?
          </a>
        </div>
<Link to="/dashboard">
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
          Sign In
        </button>
        </Link>

        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link 
          to="/register"
          className="text-blue-600 hover:underline font-medium"></Link>
        </p>

      </div>
    </div>
  );
}