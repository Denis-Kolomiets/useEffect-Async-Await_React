import { useEffect } from 'react'
import { useState } from 'react'
import Post from './Post'

function Posts() {
  const [posts, setPosts] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await res.json()
        setPosts(posts)
      } catch (error) {
        setError('Error server')
      }
      setIsLoading(false)
    }
    fetchData()
  }, [])
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((responce) => responce.json())
  //     .then((posts) => setPosts(posts))
  //     .catch((error) => setError('Error server'))
  //     .finally(() => setIsLoading(false))
  // }, [])

  if (error) {
    return <h1>Error: {error}</h1>
  }

  return (
    <>
      <>
        <h1>Posts:</h1>
        <hr />
      </>
      <div className="posts_wrapper">
        {isLoading ? (
          <h1 className="loading">Loading...</h1>
        ) : (
          posts.map((post) => <Post key={post.id} {...post} />)
        )}
      </div>
    </>
  )
}

export default Posts
