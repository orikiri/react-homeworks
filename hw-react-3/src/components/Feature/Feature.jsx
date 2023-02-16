//    Создайте компонент Feature, он принимает заголовок, подзаголовок,
//    описание, картинку и расположение. Картинка может располагаться либо
//    слева, либо справа. То есть нужно менять колонки местами.
// HTML:
//    <div class="row">
//      <div class="col-md-7">
//        <h2>Oh yeah, it's that good. <span class="text-muted">See for yourself.</span></h2>
//        <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
//      </div>
//      <div class="col-md-5">
//        <img class="img-fluid mx-auto" alt="" src="" width="500">
//      </div>
//    </div>

import React from 'react'
import { useState } from 'react'

function Feature() {
    const [direction, setDirection] = useState('row');
    function changeDirection() {
        direction === 'row' ? setDirection('row-reverse') : setDirection('row')
   }

  return (
    <div>
        <div className="row" style={{flexDirection:direction}}  onClick={changeDirection}>
            <div className="col-md-7">
                <h2>Oh yeah, it's that good. 
                    <span className="text-muted">See for yourself.</span>
                </h2>
                <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
            </div>
            <div className="col-md-5">
                <img className="img-fluid mx-auto" alt="" src="https://i.pinimg.com/originals/46/cf/98/46cf98e0592118cbd81ea348b3f4cd42.jpg" width="200" />
            </div>
        </div>
    </div>
  )
}

export default Feature