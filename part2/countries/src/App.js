import { useState, useEffect } from 'react'
import axios from 'axios'

import Countries from './components/Countries'
import CountryData from './components/CountryData'

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

  const handleClick = (event) => {
    setFilter(event.target.id)
  }

  const countriesToShow = filter === ''
    ? countries.filter(country => country.name === '')
    : countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))
  // console.log('search filter: ', countriesToShow)
  // console.log('length: ', countriesToShow.length)

  return (
    <>
      <div>
        find countries <input value={filter} onChange={({target}) => setFilter(target.value)}/>
      </div>
      <div>
        {countriesToShow.length > 10
         ? 'Too many countries, specify another filter'
         : <Countries countriesToShow={countriesToShow} handleClick={handleClick}/>}
      </div>
      <div>
        {countriesToShow.length === 1
         ? <CountryData country={countriesToShow[0]}/>
         : null}
      </div>
    </>
  )
}

export default App
