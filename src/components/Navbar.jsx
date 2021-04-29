import React from 'react'
import {logo} from '../images'


function ListItem(props){
  return(
    <li className="nav__link"><a href="/" className="nav__content">{props.value}</a></li>
  )
}

const Navbar = (props) => {
  const items = ['What it is?', 'Contributions', 'Community', 'For rightoholders', 'Login']
  const listItems = items.map((item) =>
    <ListItem key={item.toString()} value={item} />
  );

  return(
    <div className="header">
      <div className="wrapper">
        <div className="nav">
          <img src={logo} alt="" className="nav__logo"/>
          <ul className="nav__menu">
            {listItems}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar