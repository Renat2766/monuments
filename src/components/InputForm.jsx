import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {GoTriangleDown} from 'react-icons/go'
import InputFormMonuments from './InputFormMonuments'


const InputForm = () => {
  const [countries, setCountries] = useState([])
  const getCountries = async () => {
    await axios.get('https://api.monumentshade.com/v1/countries?per-page=200')
      .then((res) => {
        setCountries(res.data)
        console.log(res.data)
      })
  }
  useEffect(() => {
    getCountries()
  }, [])

  const [value, setValue] = useState('')

  const filteredCountries = countries.filter(country => {
    return country.name.toLowerCase().includes(value.toLocaleLowerCase())
  })

  const [isOpen, setIsOpen] = useState(true)

  const inputClickHandler = () => {
    setIsOpen(true)
  }

  const itemClickHandler = (e) => {
    setValue(e.target.textContent)
    setIsOpen(!isOpen)
  }

  return (
    <div className="container">
    <div className="form">
      <form action="" className="search__country">
        <input
          type="text"
          placeholder="Object state"
          className="country__input"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onClick={inputClickHandler}
        />
        <ul className="autocomplete">
        {
          value && isOpen ? filteredCountries.map((country, index) => {
            return <li 
            country={country} 
            key={index} 
            className="autocomplete__item"
            onClick={itemClickHandler}
            >
              {country.name}
              </li>
          }): null
        }
        </ul>
        <GoTriangleDown className="country__icon"/>
      </form>
      <div className="countries">
        {
          filteredCountries.map((country, index) => {
            return <li country={country} key={index}>
              <img src={country.flag} alt=""/>
              {country.name}
              </li>
          })
        }
      </div>
    </div>
    <InputFormMonuments/>
  </div>
  )
}
export default InputForm