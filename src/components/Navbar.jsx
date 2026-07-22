export default function Navbar() {
  return (
    <nav className="h-16 bg-blue-600 text-white flex items-center justify-between px-8">
      <h1 className="text-2xl font-bold">EMS</h1>

      <div className="flex items-center gap-6">
        <span>Admin</span>
        <button className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600">
          Logout
        </button>
      </div>
    </nav>
  );
}