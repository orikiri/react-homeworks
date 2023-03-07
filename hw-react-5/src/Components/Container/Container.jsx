import React from 'react'
import classes from './Container.module.css'


function Container({data, title}) {
  return (
    <div>
        <div className={classes.container}>
        
        <section>
        <div className={classes.cards}>
            {data.filter((item) => {
              return title.toLowerCase() === '' ? item : item.title.toLowerCase().includes(title)
            }).map((elem, index) => (
                <div className={classes.card} key={index}>
                  <div className={classes.card_ind}>
                    <p className={classes.symbol}>{elem.symbol}</p>
                    <div className={classes.text}>
                      <h3>{elem.title}</h3>
                      <p>{elem.keywords}</p>
                    </div>
                  </div>
                </div>
                ))}
          </div>
        </section> 
      </div>
      
    </div>
  )
}

export default Container