import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { GoSearch } from 'react-icons/go'

const InputFormMonuments = () => {
  const [monuments, setMonuments] = useState([])
  const getMonuments = async () => {
    await axios.get('https://api.monumentshade.com/v1/monuments')
      .then((res) => {
        setMonuments(res.data)
        console.log(res.data)
      })
  }
  useEffect(() => {
    getMonuments()
  }, [])

  const [value, setValue] = useState('')

  const filteredMonuments = monuments.filter(monument => {
    return monument.name.toLowerCase().includes(value.toLocaleLowerCase())
      
      
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
    <div className="form__monuments">
      <form action="" className="search__monument">
        <input
          type="text"
          placeholder="Enter monument name or location"
          className="monument__input"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onClick={inputClickHandler}
        />
        <ul className="autocomplete">
        {
          value && isOpen ? filteredMonuments.map((monument, index) => {
            return <li 
            monument={monument} 
            key={index} 
            className="autocomplete__item"
            onClick={itemClickHandler}
            >
              {monument.name}
              </li>
          }): null
        }
        </ul>
        <GoSearch className="monument__icon"/>
      </form>
      <div className="monuments">
        {
          filteredMonuments.map((monument, index) => {
            return <li monument={monument} key={index}>
              <img src={monument.image_thumb} alt=""/>
              <a href={monument.wiki_url}>{monument.address}</a>
              {monument.name}
              </li>
          })
        }
      </div>
    </div>
  )
}

export default InputFormMonuments
