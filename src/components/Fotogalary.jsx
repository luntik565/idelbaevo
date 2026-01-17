import '../css/fg.css'
import fg1 from '../image/f-g1.webp'
import fg2 from '../image/f-g2.webp'
import fg3 from '../image/f-g3.webp'
import fg4 from '../image/f-g4.webp'
import fg5 from '../image/f-g5.webp'
import fg6 from '../image/f-g6.webp'
import fg7 from '../image/f-g7.webp'
import fg8 from '../image/f-g8.webp'
import fg9 from '../image/f-g9.webp'
import fg10 from '../image/f-g10.webp'
import fg11 from '../image/f-g11.webp'


export default function Fotogalary(){
    return(
    <section className='padding-container f5' id='fg'>
        <div className="container">
            <h1 className='home-title'>Фотогалерея</h1>
            <div className="f-g">
                <img src={fg1} alt="" className="card" />
                <img src={fg2} alt="" className="card" />
                <img src={fg3} alt="" className="card" />
                <img src={fg4} alt="" className="card" />
                <img src={fg5} alt="" className="card" />
                <img src={fg6} alt="" className="card" />
                <img src={fg7} alt="" className="card" />
                <img src={fg8} alt="" className="card" />
                <img src={fg9} alt="" className="card" />
                <img src={fg10} alt="" className="card" /> 
                <img src={fg11} alt="" className="card" /> 
            </div>
        </div>
    </section>
    )
}