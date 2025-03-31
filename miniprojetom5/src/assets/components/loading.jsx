import icon from "../img/Rolling@1x-1.7s-200px-200px.svg"

function Loading(){
    return(
        <>
            <img src={icon} alt="icon image" />
            <p className="loading-text" >Carregando...</p>
        </>
    )
}


export default Loading;