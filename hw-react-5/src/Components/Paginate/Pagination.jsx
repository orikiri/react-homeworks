// import React, { useState } from 'react'
import classes from './Pagination.module.css'


function Pagination({totalCards, cardsPerPage, paginate, firstPage, lastPage, currentPage, setCardsPerPage}) {

    const pageNumbers = []
    for( let i=1; i <= Math.ceil(totalCards/cardsPerPage); i++) {
        pageNumbers.push(i)
    }

    // const [pages] = useState(2)
    // const lastPageIndex = currentPage * pages
    // const firstPageIndex = lastPageIndex - pages
    // const currentPages = pageNumbers.slice(firstPageIndex-1, lastPageIndex-1)


  return (
    <div className={classes.pagination_filter}>
        <div className={classes.pagination}>
            <ul className={classes.pagination_container}>
                <button className={classes.btn} onClick={firstPage}>First</button>
                {pageNumbers.map((number) => (
                    <a href='#' onClick={() => paginate(number)} key={number}>
                        <li className={`${currentPage === number ? 'active' : ''}`}>{number}</li>
                    </a>
                ))}
                <button className={classes.btn} onClick={lastPage}>Last</button>
            </ul>
        </div>
            <div className={classes.perPageFilter}>
                <p>Per Page</p>
                <select className={classes.select} onChange={(e) => setCardsPerPage(e.target.value)}>
                    <option>12</option>
                    <option>15</option>
                    <option>21</option>
                    <option>24</option>
                    <option>51</option>
                </select>
            </div>
    </div>
  )
}

export default Pagination