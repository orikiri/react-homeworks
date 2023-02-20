import React from 'react'
import classes from './Card.module.css';

function Card({items}) {
  return (
    <>
    {items.map((elem) => (
      <div className={classes.product_box} key={elem.id}>
        <div className={classes.product_inner_box}>
          <div className={classes.product_img_box}>
            <img src={elem.img} alt='item-img' height='300px'/>
          </div>
          
        </div>
        <div className={classes.product_info}>
          <div className={classes.product_name}>
            <p>{elem.sexSize}</p>
            <h4>{elem.name}</h4>
          </div>
          <div className={classes.product_price}>
            <h3>${elem.price}</h3>
          </div>
          <div className={classes.choose_container}>
            <div className={classes.choose_color_container}>
              <select name="color" className={classes.choose_color}>
                {elem.colors.map((color, index) => (
                  <option key={index} value={color} >{color}</option>
                ))}
              </select>
            </div>
            <div className={classes.choose_size_container}>
            <select name="size" className={classes.choose_size}>
                {elem.sizes.map((size, index) => (
                  <option key={index} value={size} >{size}</option>
                ))}
              </select>
            </div>
          </div>
        <div className={classes.product_add_to_cart}>
            <button className={classes.cart_btn}>Add to cart</button>
          </div>
        </div>
      </div>
    ))}
    </>
  )
}

export default Card