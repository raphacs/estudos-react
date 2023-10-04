import Pai from "./Pai";

interface AvoPorps {
    nome: string
    sobrenome: string
}
export default function Avo(props: AvoPorps){
    return(
        <div className={`
        flex gap-5 
        bg-purple-500
        text-white
        border border-white
        p-5
        rounded-md
        flex-col
        `}>
            <div className="flex justify-center gap-2 text-2xl">
                <span className={`font-black`}>Avo</span>
                <span>{props.nome}</span>
                <span>{props.sobrenome}</span>
            </div>
            <div className="flex gap-5">
            <Pai nome="joao" sobrenome={props.sobrenome} />
            <Pai nome="pedro" sobrenome={props.sobrenome} />
            <Pai nome="teste" sobrenome={props.sobrenome} />
            </div>
            
        </div>
    )
}