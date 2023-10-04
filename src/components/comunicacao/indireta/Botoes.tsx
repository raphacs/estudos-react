interface BotoesProps{
    inc: (valor: number) => void
    dec: (valor: number) => void
}

export default function Botoes (props: BotoesProps){ 
    return (
        <div className={`
        flex justify-between
        gap-2
        pt-2

        `}>   
            <button className="botao flex-1"
            onClick={() => props.dec(10)}>
                -10
            </button>
            <button className="botao flex-1"
            onClick={() => props.inc(11)}>
                +11
            </button>
        </div>
    )
}