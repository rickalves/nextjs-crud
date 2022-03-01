import { useState } from "react";
import Estudante from "../core/Estudante";
import InputField from "./InputField";

interface NewProps {
    estudante: Estudante
    estudanteNovo?: (estudante: Estudante) => void
    cancelar?:() => void
}

export default function NewForm(props: NewProps){
    
    const [matricula, setMatricula] = useState(props.estudante.matricula)
    const [nome, setNome] = useState(props.estudante.nome)
    const [idade, setIdade] = useState(props.estudante.idade)
    
    return (
       
        
        <section id="modal" className={`
             pointer-events-auto
             transition-all duration-300 z-20
             flex justify-center
        `}
        >
            <div className={`
                bg-slate-500 fixed opacity-60
                left-0 top-0 w-full h-full
            `}></div>

                <div className={`
                    flex flex-col gap-2 bg-white p-5 rounded-md fixed
                    w-11/12 md:w-8/12 lg:w-2/4 xl:w-1/3
                    top-1/4 
                `}>
                    <h2 className="text-2xl font-semibold text-center">Cadastrar Novo</h2>
                    <hr className="border w-full lg:w-96 mx-auto"/>
                    
                    <InputField 
                        label="Matricula" type="number" className="w-full" 
                        valor={matricula}
                        valorMudou={setMatricula}
                    />
                    <InputField 
                        label="Nome" type="text" className=" w-full" 
                        valor={nome} 
                        valorMudou={setNome}
                    />
                    <InputField 
                        label="Idade" type="number" className="w-full" 
                        valor={idade} 
                        valorMudou={setIdade}
                    />
                   
                    <div className="flex justify-end w-full py-2 gap-2">
                        <button className={`
                            border rounded px-3 py-1 cursor-pointer
                            bg-gradient-to-b from-cyan-500 to-blue-500
                            text-white hover:from-cyan-600
                        `}
                         onClick={() =>  props.estudanteNovo?.(new Estudante(nome, +idade, matricula))}
                        >
                            Salvar
                        </button>
                        <button className={`
                            border rounded px-3 py-1 cursor-pointer
                            bg-gradient-to-b from-slate-400 to-slate-500
                            text-white hover:from-slate-600
                        `}
                        onClick={() => props.cancelar()}
                        >
                            Cancelar
                        </button>
                        
                    </div>
                
                
            </div>
        </section>
    )
}