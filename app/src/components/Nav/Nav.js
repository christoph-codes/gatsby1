import React from "react";
import {Link} from 'gatsby';
import './Nav.scss';

export default function Nav(props) {
  const navlist = [
    {
      name: "Beers",
      link: "/beers",
    },
    {
        name: "Pizza Menu",
        link: "/pizzas",
      },
      {
        name: "Logo",
        link: "/",
        class: 'logo'
      },
    {
      name: "Slicemasters",
      link: "/slicemasters",
    },
    {
        name: "Order Ahead",
        link: "/order",
      },
  ]
  const renderNav = navlist.map(link => {
    return (
      <li key={link.name}>
        <Link className={link.class === 'logo' ? 'logo' : ''} to={link.link}>{link.name}</Link>
      </li>
    )
  })
  return (
    <nav className="Nav">
      <ul>
        {renderNav}
      </ul>
    </nav>
  )
}
