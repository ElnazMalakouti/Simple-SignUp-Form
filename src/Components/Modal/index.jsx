import Button from "../Button"

const Modal = ({ emailAddress, showModal, setShowModal }) => {
    return (
        <>
            <div className={`${showModal ? 'flex' : 'hidden'} w-full md:w-80 h-full md:h-80 md:rounded-3xl py-8 px-4 md:px-8 bg-white flex-col justify-center items-start gap-8 md:gap-4`}>

                <object data="/images/icon-success.svg" className="md:w-8 h-8"> </object>

                <p className="font-[Roboto-Bold] text-3xl ">Thanks for subscribing!</p>

                <p className="text-sm md:text-xs">
                    A confirm email has been sent to  
                    <span className="font-bold"> {emailAddress}</span>
                    . Please open it and click the button inside to confirm your subscription.
                </p>

                <Button
                    classname={'mt-auto'}
                    onClick={() => setShowModal(false)}
                >
                    Dismiss message
                </Button>

            </div>
        </>
    )
}

export default Modal