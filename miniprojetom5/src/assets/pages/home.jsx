import useScrollReveal from '../../hooks/useScrollReveal';

import imgHome from '../img/mental-health-animate.svg'
function Home(){
    useScrollReveal()
    return (
        <main className="section-screen" id="home">
            <article className="left">
                <h1 className="title reveal">Mente Saudável</h1>
                <p className="text-principal reveal">Cuidar da sua mente é tão importante quanto cuidar do seu corpo. Aqui no
                    , acreditamos que a saúde mental é fundamental para uma vida plena e equilibrada. Oferecemos recursos,
                    informações e apoio para ajudar você a entender e melhorar seu bem-estar emocional. Seja qual for o seu
                    desafio, estamos aqui para caminhar ao seu lado nessa jornada de autoconhecimento e crescimento</p>

                <div className="btn-field reveal">
                    <button className="btn">Saiba mais</button>
                </div>

            </article>
            <div className="right reveal">
                <img className='img-principal' src={imgHome} />
            </div>
        </main>

    )
}



export default Home;