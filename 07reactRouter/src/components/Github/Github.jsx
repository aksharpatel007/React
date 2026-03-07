import { useEffect, useState } from 'react'
// import { useLoaderData } from 'react-router-dom'

function Github() {
  // const data = useLoaderData()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api.github.com/users/aksharpatel007')
      .then(response => response.json())
      .then(data => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Loading...</div>
  }

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl rounded-xl shadow-lg max-w-4xl mx-auto'>
      <div className="flex flex-col md:flex-row items-center gap-8 pb-6">
        <img className="rounded-full border-4 border-gray-800 shadow-md" src={data.avatar_url} alt="Git picture" width={250} />

        <div className="flex flex-col items-center md:items-start w-full">
          <h1 className="text-4xl font-bold mb-2">{data.name}</h1>
          <p className="text-lg text-gray-200 mb-6 text-center md:text-left">{data.bio}</p>

          <div className="flex flex-wrap justify-center md:justify-start gap-8 mb-8 w-full">
            <div className="flex flex-col items-center bg-gray-700 p-4 rounded-lg min-w-[100px]">
              <span className="font-bold text-2xl">{data.followers}</span>
              <span className="text-sm text-gray-300">Followers</span>
            </div>
            <div className="flex flex-col items-center bg-gray-700 p-4 rounded-lg min-w-[100px]">
              <span className="font-bold text-2xl">{data.public_repos}</span>
              <span className="text-sm text-gray-300">Repos</span>
            </div>
          </div>

          {data.location && <p className="text-xl mb-6">📍 {data.location}</p>}

          <a href={data.html_url} target="_blank" rel="noreferrer" className="inline-block bg-orange-700 hover:bg-orange-800 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            Visit GitHub Profile
          </a>
        </div>
      </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/aksharpatel007')
  return response.json()
}