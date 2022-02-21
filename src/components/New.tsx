import InputField from "./InputField";

export default function New(props){
    return (
        <section id="modal" className={`
             pointer-events-none opacity-0
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
                    <InputField label="Matricula" type="number" className="w-full" />
                    <InputField label="Nome" type="text" className=" w-full" />
                    <InputField label="Idade" type="number" className="w-full" />
                    <div className="flex justify-end w-full py-2 gap-2">
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