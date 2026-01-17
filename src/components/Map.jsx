import '../css/map.css'

export default function Map(){
    return(
        <section className='padding-container' id='map'>
            <div className="container">
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae6c15e756673ca59a47b248111d35d8eb88ec9ca53e140c2d25337f51fa25642&amp;source=constructor" width="100%" height="600" frameborder="0"></iframe>
            </div>
        </section>
    )
}