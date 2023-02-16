// Сделайте поле для ввода имени, а под ним строку "Привет, %name%". При вводе текста в поле, должен меняться текст под ним. Если имя это "Санчелло", то строка должна быть "Саня, верни долг!!!" Рядом с полем для ввода, должна быть кнопка отчистить.

import React from 'react'
import { useState } from 'react'

function Sanchello() {
    const [firstName, setFirstName] = useState('')
    
  return (
    <div>
        <input placeholder='Введите имя' value={firstName} onChange={(a) => setFirstName(a.target.value)}/>
        <button onClick={() => setFirstName('')}>Clear</button>
        {firstName.toLowerCase() === 'санчелло' ? <p>Саня, верни долг!</p> : <p>Привет, {firstName}</p>}
    </div>
  )
}

export default Sanchello