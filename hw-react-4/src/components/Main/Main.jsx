import React from 'react'
import classes from './Main.module.css'

function Main() {
  return (
    <div className={classes.main}>
        <h1>Welcome to our Store</h1>
        <div className={classes.news}>
            <h2>NEWS 1</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque fuga molestiae explicabo soluta quidem voluptatum saepe beatae hic culpa, deleniti quisquam esse neque excepturi quaerat accusantium veritatis nobis! Adipisci, autem.</p>
            <br/>
            <h2>NEWS 2</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque fuga molestiae explicabo soluta quidem voluptatum saepe beatae hic culpa, deleniti quisquam esse neque excepturi quaerat accusantium veritatis nobis! Adipisci, autem.</p>
            <br/>

            <h2>NEWS 3</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque fuga molestiae explicabo soluta quidem voluptatum saepe beatae hic culpa, deleniti quisquam esse neque excepturi quaerat accusantium veritatis nobis! Adipisci, autem.</p>
            <br/>

            <h2>NEWS 4</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque fuga molestiae explicabo soluta quidem voluptatum saepe beatae hic culpa, deleniti quisquam esse neque excepturi quaerat accusantium veritatis nobis! Adipisci, autem.</p>
        </div>
    </div>
  )
}

export default Main