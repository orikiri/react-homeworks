import React from 'react'
import classes from '../Container/Container.module.css'


function Inputbar({setTitle}) {
  return (
    <>
        <div className={classes.input}>
            <input type='text' placeholder='Найти свой емоджи...' onChange={(e) => setTitle(e.target.value)} />
        </div>
    </>
  )
}

export default Inputbar