import { useState, useEffect } from 'react';
import axios from 'axios'

const App = () => {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log(response.data)
        setCountries(response.data)
      })
  }, [])

  const countriesToShow = filter === ''
    ? countries.filter(country => country.name === '')
    : countries.filter((country) => country.name.common.toLowerCase().includes(filter.toLowerCase()))
  console.log('search filter: ', countriesToShow)

  return (
    <>
      <div>
        find countries <input value={filter} onChange={({target}) => setFilter(target.value)}/>
      </div>
    </>
  )
}

export default App
