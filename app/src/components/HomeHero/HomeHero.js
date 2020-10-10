import React from "react"
import "./HomeHero.scss";
import video from '../../assets/videos/pizza.mp4'

export default function HomeHero(props) {
  return (
    <div className="HomeHero">
        <div className="container">
        <h1>Home Hero Dawg</h1>
      <video autoPlay muted loop id="home-video">
        <source src={video} type="video/mp4" />
      </video>
        </div>
    </div>
  )
}
