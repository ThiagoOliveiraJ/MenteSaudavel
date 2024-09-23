function Footer({ name }) {

    return (
        <footer className="footer">
            <span>All rights reserved © 2024</span>
            <div className="name-container">
                <p>Desenvolvido por <span className="name-footer">{name}</span></p>
                <div className="icons">
                    <i onClick={() => window.open("https://www.linkedin.com/in/thiago-oliveira-631862248/", "_blank")} className="fa-brands fa-linkedin"></i>
                    <i onClick={() => window.open("https://github.com/ThiagoOliveiraJ", "_blank")} className="fa-brands fa-square-github"></i>

                </div>
            </div>
        </footer>
    )
}


export default Footer;