import React from 'react'
import { Link } from 'react-router-dom'
import { SiHey } from "react-icons/si";
import { RiCustomerServiceLine } from "react-icons/ri";
import { AiOutlineQuestion } from "react-icons/ai";
import classes from './Header.module.css';



function Header() {
  return (
    <div className={classes.header}>
        <div className={classes.links}>
            <Link to='/'>
                <button className={classes.btn}>
                    <h2>
                        <SiHey />
                        Store name</h2>
                </button>
            </Link>
            <Link to='/Items'>
                <button className={classes.btn}>
                    <p>ITEMS</p>
                </button>
            </Link>
            <Link to='/Cart'>
                <button className={classes.btn}>
                    <p>CART</p>
                </button>
            </Link>
        </div>
        <div className={classes.service}>
            <Link to='/Service'>
                <button className={classes.btn}><RiCustomerServiceLine /></button>
            </Link>
            <Link to='/Q_A'>
                <button className={classes.btn}><AiOutlineQuestion /></button>
            </Link>
        </div>
        
    </div>
  )
}

export default Header