interface ButtonProps {
    title?: string
    children: any
    onClick?:() => void
}

import style from '../styles/Button.module.css'
export default function Button(props: ButtonProps){
    return (
        
            <button title={props.title} className={`
                bg-gradient-to-b from-cyan-500 to-blue-500
                text-white p-3 rounded-full flex gap-3 items-center overflow-hidden
                h-12 
                ${style.btn}
            `}
            onClick={props.onClick}
            >
                {props.children}
            </button>
     
    )
}
