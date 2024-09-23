import SectionScreen from "../components/sectionScreen";
import imgCard from "../img/imgMentalWellness.svg"

function MentalWellness() {
    console.log('rendezerizando mental wellness')
    return (
        <SectionScreen type="MentalWellness" 
        title="Por que devemos cuidar do Bem-Estar Mental?" 
        text="Por que devemos cuidar do Bem-Estar Mental?
        O bem-estar mental é a base para uma vida saudável e equilibrada. Ele impacta diretamente a maneira como lidamos com o estresse, tomamos decisões e interagimos com o mundo ao nosso redor. Cuidar da mente nos ajuda a desenvolver resiliência emocional, manter relacionamentos saudáveis e melhorar a qualidade de vida. Investir no nosso bem-estar mental significa reconhecer que ele é tão importante quanto a saúde física, e é um passo essencial para alcançar harmonia e satisfação pessoal."
        imgCard={imgCard}
        />
    )
}

export default MentalWellness;