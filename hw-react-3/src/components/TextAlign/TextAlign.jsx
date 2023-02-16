// Задание:
//    Написать компонент который меняет выравнивание текста (text-align)
//    у элемента h2 по кликам на кнопки
// HTML:
//    <div>
//      <h2 style={}>Align me</h2>
//      <button>Left</button>
//      <button>Center</button>
//      <button>Right</button>
//    </div>-->

import React from 'react'
import { useState } from 'react';

function TextAlign() {
    const [text, setText] = useState('center');

  return (
    <div>
        <h2 style={{textAlign:text}}>Align Me</h2>
        <button onClick={() => setText('left')}>Left</button>
        <button onClick={() => setText('center')}>Center</button>
        <button onClick={() => setText('right')}>Right</button>
    </div>
  )
}

export default TextAlign
