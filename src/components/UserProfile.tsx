import type { User } from "../App";



type UserProfileProps ={
  user : User,
  nextUser: (e:React.MouseEvent<HTMLButtonElement>)=>void
}

export default function UserProfile({user, nextUser}: UserProfileProps) {
  return (
    <form className="max-w-md mx-auto bg-white my-4 p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Edit User Profile</h2>

      <div className="mb-4">
        <label className=" block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          type="text"
          name="name"
          className="w-full p-2 border border-gray-300 rounded"
          value={user.name}
          onChange={()=>{}}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          className="w-full p-2 border border-gray-300 rounded"
          value={user.email}
          onChange={()=>{}}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Age
        </label>
        <input
          type="number"
          name="age"
          className="w-full p-2 border border-gray-300 rounded"
          value={user.age}
          onChange={()=>{}}
        />
      </div>

      <button
        onClick={nextUser}
        className="bg-orange-500 hover:bg-orange-600 transition-colors text-white font-bold py-2 px-4 rounded"
      >
        Next User
      </button>
    </form>
  );
}