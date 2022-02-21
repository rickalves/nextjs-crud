import InputField from "./InputField";

export default function New(props){
    return (
        <section id="modal" className={`
             flex items-center justify-center 
             pointer-events-none z-30 opacity-0
             transition-all duration-300
        `}
        >
            
            <div className={`
                bg-slate-500 fixed opacity-60
                left-0 top-0 w-full h-full
            `}>
             </div>
                <div className={`
                    flex flex-col gap-2 bg-white p-4 rounded-md fixed
                    items-center w-1/3 top-1/4
                `}>
                    <h2 className="text-2xl font-semibold">Cadastrar Novo</h2>
                    <hr className="border w-96"/>
                    <InputField label="Matricula" type="number" className="w-96" />
                    <InputField label="Nome" type="text" className="w-96" />
                    <InputField label="Idade" type="number" className="w-96" />
                    <div className="flex justify-end w-full px-10 py-2 gap-2">
                        <button className={`
                            border rounded px-3 py-1 cursor-pointer
                            bg-gradient-to-b from-cyan-500 to-blue-500
                            text-white hover:from-cyan-600
                        `}>
                            Salvar
                        </button>
                        <button className={`
                            border rounded px-3 py-1 cursor-pointer
                            bg-gradient-to-b from-slate-400 to-slate-500
                            text-white hover:from-slate-600
                        `}
                        onClick={() => {
                            const modal = document.querySelector('#modal')
                            modal.classList.toggle('opacity-0')
                            modal.classList.remove('pointer-events-auto')
                            modal.classList.add('pointer-events-none')
                          }}
                        >
                            Cancelar
                        </button>
                        
                    </div>
                
                
            </div>
        </section>
    )
}