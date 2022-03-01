import Estudante from "../core/Estudante";
import { EditIcon, TrashIcon } from "./Icons";

interface TabelaProps {
    estudantes: Estudante[]
    estudanteSelecionado?: (estudante: Estudante) => void
    estudanteExcluido?: (estudante: Estudante) => void
}

export default function Tabela(props: TabelaProps){
   
    function setActions(estudante: Estudante){
        return(
            <td className="py-1 lg:py-2 flex justify-center">
                {props.estudanteSelecionado ? (
                    <button onClick={() => props.estudanteSelecionado?.(estudante)} 
                    className={`
                        p-2 rounded-full mx-1 bg-slate-300 
                        hover:bg-gradient-to-b from-cyan-500 to-blue-500
                      hover:text-white transition-all ease-in-out duration-500
                    `}>
                        {EditIcon}
                    </button>
                ) : false}
                {props.estudanteExcluido ? (
                    <button onClick={() => props.estudanteExcluido?.(estudante)} 
                    className={`
                            p-2 rounded-full mx-1 bg-slate-300 
                            hover:bg-gradient-to-b from-cyan-500 to-blue-500
                            hover:text-white transition-all ease-in-out duration-400
                    `}>
                        {TrashIcon}
                    </button>
                ) : false}
            </td>
        )
    }

    const showActions = props.estudanteSelecionado || props.estudanteExcluido
    return (
       <div className="overflow-x-scroll lg:overflow-x-hidden">
        <table className={`
           table-auto w-full text-left border-collapse
           rounded-lg overflow-hidden shadow
        `}>
           <thead className={`
                h-14 bg-gradient-to-r from-cyan-500 to-blue-500
                text-white 
                
           `}>
                <tr>
                    <th className="p-3 w-1/4">Matrícula</th>
                    <th className="p-3 w-1/3">Nome</th>
                    <th className="p-3 w-1/5 text-center">Idade</th>
                    {showActions ? <th className="p-3 w-1/6 text-center">Ações</th> : false}
                </tr>
            </thead>
           
            <tbody>
                {props.estudantes.map((estudante, i) => {
                   return(
                   <tr key={estudante.matricula}
                    className={`${i % 2 === 0 ? 'bg-blue-50' : 'bg-blue-100'}`}
                   >
                        <td className="px-3 w-1/4">{estudante.matricula}</td>
                        <td className="px-2 w-1/4">{estudante.nome}</td>
                        <td className="px-2 w-1/4 text-center">{estudante.idade}</td>
                        {showActions ? setActions(estudante) : false}
                    </tr>
                   )
                })}
                
            </tbody>
        </table>
        </div> 
    )
}