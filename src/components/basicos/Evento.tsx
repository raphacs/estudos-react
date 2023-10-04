export default function Evento(){

    let contador = 0

    function incrementar(){
        contador++
    }
    return(
        <button className={
            ` 
            flex justify-center items-center
            text-4xl
            h-72
            w-72
            bg-green-500
            `
        }onClick={incrementar}>
            Evento
        </button>
    )
}