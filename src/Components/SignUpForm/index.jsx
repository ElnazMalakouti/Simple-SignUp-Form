import { useState } from "react"
import Button from "../Button"

const SignUpForm = () => {

    const [emailIsValid, setEmailIsValid] = useState(true)

    const [emailInputValue , setEmailInputValue] = useState('')

    function validateEmail(email) {

        const emailRegex =  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

        const isValidEmail = emailRegex.test(email);

        setEmailIsValid(isValidEmail)

        console.log(`emailRegex: ${emailIsValid}`)
    }

    return (
        <>
            <div className="w-full md:w-[90%] lg:w-[80%] xl:w-[60%] h-full md:h-[90%] lg:h-[80%] rounded-3xl bg-white md:py-4 md:px-2 flex flex-col md:flex-row gap-8">

                <div className="w-full h-auto md:h-full order-1 md:order-2">
                    <object data="/images/illustration-sign-up-mobile.svg" className="w-full h-auto md:hidden"> </object>
                    <object data="/images/illustration-sign-up-desktop.svg" className="w-full h-auto max-h-full hidden md:block"> </object>
                </div>

                <div className="w-full h-full md:h-auto md:my-auto px-8 pb-4 flex flex-col gap-4 order-2 md:order-1">


                    <p className="font-[Roboto-Bold] text-3xl">Stay Updated!</p>

                    <p className="text-sm">

                        join 60,000+ product managers receiving mountly updates on:
                    </p>

                    <div className="w-full my-4 flex flex-col gap-2 text-sm">
                        <div className="w-full flex justify-start items-start gap-2">
                            <object data="/images/icon-list.svg" className="w-4 h-auto"> </object>
                            <p>Product discovery and building what matters</p>
                        </div>
                        <div className="w-full flex justify-start items-start gap-2">
                            <object data="/images/icon-list.svg" className="w-4 h-auto"> </object>
                            <p>Measuring to ensure updates are success</p>
                        </div>
                        <div className="w-full flex justify-start items-start gap-2">
                            <object data="/images/icon-list.svg" className="w-4 h-auto"> </object>
                            <p>And much more!</p>
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-1 text-xs ">
                        <div className="w-full flex justify-between items-center">
                            <label className="font-[Roboto-Bold]">Email Address</label>
                            <p className={`${emailIsValid ? 'hidden' : 'block'} text-red-500`}>Valid email required</p>
                        </div>
                        <input
                            type="email"
                            value={emailInputValue}
                            onChange={(e) => setEmailInputValue(e.target.value)}
                            className={`w-full h-12 px-4 rounded-lg border focus:outline-0 ${emailIsValid ? 'border-2 hover:border-[#292731] hover:text-[#292731]' : 'border-1 border-red-500 bg-red-100 text-red-500'}`}
                            placeholder="email@company.com" />
                    </div>

                    <Button onClick={() => validateEmail(emailInputValue)}>
                        Subscribe to mountly newsletter
                    </Button>


                </div>

            </div>
        </>
    )
}

export default SignUpForm