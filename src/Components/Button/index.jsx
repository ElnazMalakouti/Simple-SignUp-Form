import './index.css'


const Button = ({children , classname , ...props}) => {
    return(
        <>
            <button className={`w-full h-12 px-4 rounded-lg text-white font-[Roboto-Bold] bg-[#21253E] flex justify-center items-center text-xs ${classname}`}  {...props}>
                {children}
            </button>
        </>
    )
}

export default Button