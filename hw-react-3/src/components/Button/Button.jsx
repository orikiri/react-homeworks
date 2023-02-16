// Задание:
//    Написать компонент который меняет выравнивание текста (text-align) 
//    у элемента h2. По клику на кнопку Toggle, меняется выравнивание: 
//    сначала по левому краю, потом по центру, потом по правому краю.
// HTML:
//    <div>
//      <h2 style={}>Align me</h2>
//      <button>Toggle</button>
//    </div>

import React from 'react'
import { useState } from 'react'

function Button() {
    const [text, setText] = useState('left')
   
    function changeTextAlign() {
        text === ('left') ? setText('center') : 
        text === ('center') ? setText('right') : setText("left")
    }

  return (
    <div>
        <h2 style={{textAlign:text}}>Align me</h2>
        <button onClick={changeTextAlign}>Toggle</button>
    </div>
  )
}

export default Button