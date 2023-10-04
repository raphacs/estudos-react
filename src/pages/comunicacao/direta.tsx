import Avo from "@/components/comunicacao/direta/Avo";

export default function PaginaDireta(){
    return(
        <div className="flex flex-col gap-5 justify-center items-center h-screen">
           <h1 className="text-5xl mb-10 font-black">Comunicacao Direta</h1>
           <Avo nome="Mariano" sobrenome="Pereira"/>
           <Avo nome="antonio" sobrenome="Miranda"/>
        </div>
    )
}