export default function Main() {
    return (
      <>
        <form className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
          <input
            type="text"
            placeholder="Enter your ingredient"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Search
          </button>
        </form>
      </>
    );
  }