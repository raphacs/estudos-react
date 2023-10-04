import Filho from "./Filho";

interface PaiPorps {
    nome: string
    sobrenome: string
}

export default function Pai(props: PaiPorps){
    return(
        <div className={`
        flax flex-col
        gap-5
        bg-blue-500
        text-white
        border border-white
        rounded-md p-5`}>
            <div className="flex justify-center gap-2 text-xl">
                <span className={`font-black`}>Pai</span>
                <span>{props.nome}</span>
                <span>{props.sobrenome}</span>
            </div>
            <div className="flex gap-5">
            <Filho nome="rapha" sobrenome={props.sobrenome} />
            <Filho nome="davy" sobrenome={props.sobrenome} />
                
            </div>
        </div>
    )
}