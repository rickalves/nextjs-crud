import { useState } from "react";
import InputField from "./InputField";

interface FormProps {
    
}
export default function Form(props: FormProps){
    const [nome, setNome] = useState()
    const [idade, setIdade] = useState()
    return(
        <div className={`
            flex flex-col lg:flex-row col-span-12 lg:col-span-9
            gap-2 
        `}>
            <InputField label="Matricula" type="number" className="w-full lg:w-24 xl:w-40" />
            <InputField label="Nome" type="text" className="w-full lg:w-96" />
            <InputField label="Idade" type="number" className="w-full lg:w-20 xl:w-32" />
        </div>
    )
}