import React from 'react'
import Search from './components/Search'

const App = () => {
  const [searchTerm, setSearchTerm] = React.useState(''); // Create a state variable to store the search term entered by the user in the search input field and a function to update the state variable.


  return (
    <main>

      <div className='pattern' >

        <div className='wrapper'>
            <header>
              <img src="./hero.png" alt='Hero Banner' />
              <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy Without the Hassle</h1>
            </header>

            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <h1 className='text-white'>{searchTerm}</h1>
        </div>
      </div>
    </main>
  )
}

export default App
