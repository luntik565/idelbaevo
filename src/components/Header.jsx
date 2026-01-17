import { useState } from 'react'
import '../css/header.css'

export default function Header(){
    const [open, setopen] = useState(false)
    function menuHand(){
        setopen(!open)
    }
    return(
        <header className='header' id='header'>
            <div className=" header-cont container">
                <ul className={` header-item ${open ? 'act' : ''}`}>
                    <li><a href="#header" className='header-link'>Главная</a></li>
                    <li><a href="#home" className='header-link'>Про дом</a></li>
                    <li><a href="#fg" className='header-link'>Фотогалерея</a></li>
                    <li><a href="#map" className='header-link'>Как доехать</a></li> 
                    <li><a href="#contact" className='header-link'>Контакты</a></li>
                </ul>
                <div className={`burger ${open ? 'act' : ''}`} onClick={menuHand}>
                        <span></span>
                        <span></span>
                        <span></span>
                </div>
            </div>
        </header>
    )
}