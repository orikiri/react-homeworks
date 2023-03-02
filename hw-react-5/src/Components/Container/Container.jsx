import React from 'react'
import classes from './Container.module.css'


function Container({data, title}) {
  return (
    <div>
        <div className={classes.container}>
        
        <section>
        <div className={classes.Cards}>
            {data.filter((item) => {
            return title.toLowerCase() === '' ? item : item.title.toLowerCase().includes(title);
          }).map((elem, index) => (
                <div className={classes.Card} key={index}>
                  <div className={classes.Card_ind}>
                    <p className={classes.Symbol}>{elem.symbol}</p>
                    <div>
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