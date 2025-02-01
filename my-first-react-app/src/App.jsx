import { useState } from 'react'

const Card = ({ title }) => {
  const [hasLiked, setHasLiked] = useState(false);
  return (
    <div className="card" >
      <h2>{title}</h2>

      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? 'Liked' : 'Like'}
      </button>
    </div>
  )
}

const App = () => {


  return (
    <div>
    <h2>Functional Arrow Component</h2>

    <Card title="Stars Wars" rating={5} isCool={true} actors={[{ name: 'Actors'}]} />
    <Card title="Avatar" />
    <Card title="The Lion King" />
    </div>
  )
}

export default App
