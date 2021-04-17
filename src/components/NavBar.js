import React from "react"
import { Link } from "gatsby"

export default function NavBar() {
  return (
    <nav>
      <h1>Web Warrior</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portolio Projects</Link>
      </div>
    </nav>
  )
}
