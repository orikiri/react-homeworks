import React from 'react'
import classes from './Header.module.css'

function Header() {
  return (
    <div className={classes.Header}>
        <h1> Emoji Finder </h1>
        <p> Find emoji by keywords</p>
    </div>
  )
}

export default Header