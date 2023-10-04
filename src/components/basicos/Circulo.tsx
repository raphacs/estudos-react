interface CirculoProps {
    texto: string
    quasePerfeito?: boolean
}

export default function Circulo(props:CirculoProps) {
    console.log(props)
    return(
        <div className={
            `
            flex justify-center items-center
            h-64
            w-64
            ${props.quasePerfeito ?  'rounded-2xl' : 'rounded-full'}
            bg-cyan-500
            text-black text-3xl
            `
        }>
            {
                props.texto
            }
        </div>
    )
}