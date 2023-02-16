//<!--Задание:
//    Сделать форму, в которой будет два поля с именем и фамилией
//    при отправке формы, на экран выводится сообщение с текстом
//    «Имя Фамилия»

import React from 'react'
import { useState } from 'react'

function NameSurname() {
    const [inputName, setName] = useState('')
    const [inputSurname, setSurname] = useState('')

    function showNames() {
      inputName !== '' && inputSurname !== '' &&
        alert(`Ваше имя: ${inputName} ${inputSurname}`)
    }

  return (
    <div>
        <input placeholder='Введите имя' value={inputName} onChange={(e) => setName(e.target.value)}/>
        <input placeholder='Введите фамилию' value={inputSurname} onChange={(e) => setSurname(e.target.value)}/>
        <button onClick={showNames}>Вывести</button>
    </div>
  )
}

export default NameSurname