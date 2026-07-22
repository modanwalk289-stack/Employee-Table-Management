export default function DeleteModal() {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">

      <div className="bg-white w-[400px] rounded-xl p-6 shadow-xl">

        <h2 className="text-2xl font-bold mb-4">
          Delete Employee
        </h2>

        <p className="text-gray-600 mb-6">
          Are you sure you want to delete this employee?
          This action cannot be undone.
        </p>

        <div className="flex justify-end gap-4">

          <button className="px-5 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 cursor-pointer">
            Cancel
          </button>

          <button className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 cursor-pointer">
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}