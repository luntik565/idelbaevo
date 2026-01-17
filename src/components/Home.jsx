import { useState } from 'react'
import '../css/home.css'
import home from '../image/home.webp'
import home1 from '../image/home1.webp'
import home2 from '../image/home2.webp'
import home3 from '../image/home3.webp'
import home4 from '../image/home4.webp'
import home5 from '../image/home5.webp'
import home6 from '../image/home6.webp'
import home7 from '../image/home7.webp'
import home8 from '../image/home8.webp'

export default function Home(){
    const [count, setCount] = useState(0)
    function countPlus(){
        if(count === -2800){
            setCount(0)
        } else{
            setCount(count -350)
        }
    }

    function countMinus(){
        if(count === 0){
            setCount(-2800)
        }
        else{
            setCount(count + 350)
        }
    }

    return(
        <section className='padding-container' id='home'>
            <div className="container">
                <h1 className='home-title'>О доме</h1>
                <div className="home">
                    <p className='home-txt'>
                        Стоимость 1500 за одгого человека на сутки
                        в стоимость включены кухня, баня все остальное
                        <br />
                        чан отдельно летом 5000р зиой 7000р
                        <br />
                        вместимомть до 10 человек
                        <br />
                        площадь 200м<sup>2</sup>
                    </p>
                    <div className="home-slider">
                        
                        <div className="slider-line" style={{transform: `translateX(${count}px)`}}>
                            <img src={home} alt="" className='slider-image'/>
                            <img src={home1} alt="" className='slider-image'/>
                            <img src={home2} alt="" className='slider-image'/>
                            <img src={home3} alt="" className='slider-image'/>
                            <img src={home4} alt="" className='slider-image'/>
                            <img src={home5} alt="" className='slider-image'/>
                            <img src={home6} alt="" className='slider-image'/>
                            <img src={home7} alt="" className='slider-image'/>
                            <img src={home8} alt="" className='slider-image'/>
                        </div>
                        <div className="slider-button">
                        <p className='slider-control' onClick={countMinus}>⬅</p>
                        <p className='slider-control' onClick={countPlus}>⮕</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}