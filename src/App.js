
import {firestore} from '../src/firebase/config'
import {useState, useEffect} from 'react'

function App() {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() =>{
    setIsPending(true)
    firestore.collection('blog-posts').get().then((snapshot)=>{
      if (snapshot.empty){
        setError('no blog posts')
        setIsPending(false)
      } else {
        let results = []
        snapshot.docs.forEach(doc => {
          results.push({id: doc.id, ...doc.data()})
        })
        setData(results)
        setIsPending(false)
      }
    }).catch(err => {
      setError(err.message)
      setIsPending(false)
    })

  }, [])


  return (
    <div className="App">
      {error && <p className = 'error'>{error}</p>}
      {isPending && <p className = 'loading'>Loading...</p>}
      <ul>
      {data && data.map((post)=>
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p><i>{post.content}</i></p>
        </li>
      )}
    </ul>
    </div>
  );
}

export default App;
