import './App.css'

function App() {

  return (
    <div className='fixed flex flex-wrap justify-center  bottom-12 inset-x-0 px-2'>
      <div className="flex flex-wrap gap-3 justify-center bg-white rounded-full px-1 py-1 shadow-md shadow-black-500">
        <button className="bg-red-900 text-white px-4 py-1 rounded-full" onClick={() => document.body.className = "bg-red-900 shadow-lg"}>Red</button>

        <button className="bg-blue-700 text-white px-4 py-1 rounded-full" onClick={() => document.body.className = "bg-blue-700 shadow-lg duration-500 ease-in-out"}>Blue</button>

        <button className="bg-green-800 text-white px-4 py-1 rounded-full" onClick={() => document.body.className = "bg-green-800 shadow-lg duration-500 ease-in-out"}>Green</button>

        <button className="bg-yellow-500 text-white px-4 py-1 rounded-full" onClick={() => document.body.className = "bg-yellow-500 shadow-lg duration-500 ease-in-out"}>Yellow</button>

        <button className="bg-fuchsia-900 text-white px-4 py-1 rounded-full" onClick={() => document.body.className = "bg-fuchsia-900 shadow-lg duration-500 ease-in-out"}>Purple</button>

        <button className="bg-gray-700 text-white px-4 py-1 rounded-full" onClick={() => document.body.className = "bg-gray-700 shadow-lg duration-500 ease-in-out"}>Gray</button>

        <button className="bg-teal-500 text-white px-4 py-1 rounded-full" onClick={() => document.body.className = "bg-teal-500 shadow-lg duration-500 ease-in-out"}>Teal</button>

        <button className="bg-orange-700 text-white px-4 py-1 rounded-full" onClick={() => document.body.className = "bg-orange-700 shadow-lg duration-500 ease-in-out"}>Orange</button>

        <button className="bg-pink-400 text-white px-4 py-1 rounded-full" onClick={() => document.body.className = "bg-pink-400 shadow-lg duration-500 ease-in-out"}>Pink</button>

        <button className="bg-indigo-700 text-white px-4 py-1 rounded-full" onClick={() => document.body.className = "bg-indigo-700 shadow-lg duration-500 ease-in-out"}>Indigo</button>

        <button className="bg-white text-black px-4 py-1 rounded-full" onClick={() => document.body.className = "bg-white shadow-lg duration-500 ease-in-out"}>white</button>

        <button className="bg-black text-white px-4 py-1 rounded-full" onClick={() => document.body.className = "bg-black shadow-lg duration-500 ease-in-out"}>Black</button>

      </div>
    </div>
  )
}

export default App
