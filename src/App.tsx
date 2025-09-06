import UserProfile from "./components/UserProfile";

export default function App() {
  return (
    <main className="min-h-screen bg-gray-900 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-white">
        User Profile App
      </h1>
      <p className="text-center text-white">Loading user data...</p>
      <UserProfile />
      <section className="text-center">
          <p className="text-lg mb-4 text-white">
            No more users available. You have reached the end of the list.
          </p>
          <button
            
            className="bg-green-500 hover:bg-green-600 transition-colors text-white font-bold py-2 px-4 rounded"
          >
            Reset and Start Over
          </button>
        </section>
      
    </main>
  );
}