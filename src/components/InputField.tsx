interface InputFieldProps {
    type: 'text' | 'number'
    label: string
    className?:string
    valor?: any
    readonly?: boolean
    valorMudou?:(value: any) => void
}
export default function InputField(props: InputFieldProps){
    return(
        <div className="flex flex-col">
            <label className="block">
            </label>
                <span className="text-gray-700">{props.label}</span>
                <input
                  type={props.type}
                  value={props.valor}
                  onChange={e => props.valorMudou?.(e.target.value)}
                  className={`
                    mt-1
                    block
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                    ${props.className} 
                `}
                />
             
        </div>  
    )
}