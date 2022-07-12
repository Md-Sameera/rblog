import React from 'react'
import { Link } from 'react-router-dom'
import "./Styles.css"

const Main=()=> {
  return (
    <>
    <div className='cont'>
          <div className='si'><h3 className='the'>The</h3><h1 className='sir'>SIREN</h1></div>
          <div className='bar'>
          <ol>
              <Link to="/home"><li>Home</li></Link>
              <Link to="/bollywood"><li>Bollywood</li></Link>
              <Link to="/technology"><li>Technology</li></Link>
              <Link to="/hollywood"><li>Hollywood</li></Link>
              <Link to="/fitness"><li>Fitness</li></Link>
              <Link to="/food"><li>Food</li></Link>
          </ol>
          </div>
      </div> 
    </>
  )
}
export default Main
    