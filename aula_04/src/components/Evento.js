export default function Evento({palavra}){

    function meuEvento(){
        console.log(`Opa! Fui Ativado! ${palavra}`)
    }

    return(
        <div>
            <p>Clique para disparar um evento</p>
            <button onClick={meuEvento}>ATIVAR!</button>
        </div>
    )

}