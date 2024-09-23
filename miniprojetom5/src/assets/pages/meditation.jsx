import useScrollReveal from '../../hooks/useScrollReveal'; 


import SectionScreen from "../components/sectionScreen";
import imgCard from "../img/imgMeditation.svg"


function Meditation() {
    useScrollReveal()
    return (
        <SectionScreen type="meditationResources"
            title="Por que devemos Praticar Meditação?"
            text="A meditação é uma prática poderosa para acalmar a mente e reduzir o estresse. Ao dedicar alguns minutos do dia para meditar, conseguimos desconectar das preocupações cotidianas e cultivar um estado de tranquilidade e clareza mental. A meditação nos ajuda a viver o presente, a melhorar o foco e a desenvolver uma maior consciência emocional. Com o tempo, ela promove o equilíbrio interior, fortalece a resiliência e proporciona uma sensação de paz que nos acompanha ao longo do dia."
            imgCard={imgCard}
        />
    )

}

export default Meditation;