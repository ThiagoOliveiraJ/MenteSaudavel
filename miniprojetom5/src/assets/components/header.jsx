function Header({ homeRef, mentalWellnessRef, meditationRef, physicalRef }) {
    const scrollToRef = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header>
            <h3 className="logo">Mente<span>Saudável</span></h3>
            <ul className="menu">
                <li onClick={() => scrollToRef(homeRef)}>Início</li>
                <li onClick={() => scrollToRef(mentalWellnessRef)}>Bem-Estar</li>
                <li onClick={() => scrollToRef(meditationRef)}>Meditação</li>
                <li onClick={() => scrollToRef(physicalRef)}>Atividades Físicas</li>
            </ul>
        </header>
    );
}

export default Header;