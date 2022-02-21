import Header from "./Header"

interface LayoutProps {
    title?: string
    children: any
}

export default function Layout(props: LayoutProps){
    return(
      <div className={`
        grid grid-cols-12 h-screen items-center
        bg-gradient-to-r from-cyan-500 to-blue-500
        text-white
      `}>
        <div className={`
            p-3 rounded
            bg-white text-gray-600 text-lg shadow
            col-span-12
            md:col-span-10 md:col-start-2 
            lg:col-span-10 lg:col-start-2
            xl:col-span-8 xl:col-start-3
        `}>
            <Header { ...props}/>
            <div className="p-2 lg:p-6 overflow-scroll lg:overflow-x-hidden">
                {props.children}
            </div>
        </div>
      </div>
    )
}