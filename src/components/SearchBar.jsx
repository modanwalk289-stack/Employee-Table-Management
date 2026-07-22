export default function SearchBar() {
  return (
    <div className="flex justify-between items-center my-8">
      <input
        type="text"
        placeholder="Search Employee..."
        className="w-80 border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button className="bg-blue-600 text-white px-4 py-1 ml-2 rounded-lg hover:bg-blue-700">
        + Add Employee
      </button>
    </div>
  );
}