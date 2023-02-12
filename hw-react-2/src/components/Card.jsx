import React from 'react';

function Card({items}) {
  return (
    <div>
        <div className="card mb-4 box-shadow">
            {items.map((elem) => (
                <div className='container' key={elem.id}>
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">{elem.type}</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">{elem.price} <small className="text-muted">/ ru</small></h1>
                        <div className="mt-3 mb-4">{elem.content}</div>
                        <button type="button" className="btn btn-lg btn-block btn-outline-primary">Add to cart</button>
                    </div>
                </div>
            ))}
         </div>
    </div>
  )
}

export default Card;


