export default function Header(props){
    return(
        <div className="col-span-12">
            <h1 className=" flex justify-center mb-5 text-3xl font-bold text-center">
                {props.title}
            </h1>
            <hr />
        </div>
    )
}