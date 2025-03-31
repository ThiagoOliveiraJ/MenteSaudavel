import icon from "../img/Rolling@1x-1.7s-200px-200px.svg"

function Loading() {
    return (
        <div className="loading-container">
            <img className="icon-loading" src={icon} alt="icon image" />
            <p className="loading-text" >Carregando...</p>
        </div>
    )
}


export default Loading;