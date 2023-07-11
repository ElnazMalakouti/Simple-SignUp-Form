import Button from "../Button"

const SignUpForm = () => {
    return (
        <>
            <div className="w-full h-full flex flex-col gap-8">

                <div className="w-full h-auto">
                    <object data="/images/illustration-sign-up-mobile.svg" className="w-full h-auto"> </object>
                </div>

                <div className="w-full h-full px-8 pb-4 flex flex-col gap-4">


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
                        <label className="font-[Roboto-Bold]">Email Address</label>
                        <input className="w-full h-12 px-4 rounded-lg border-2 hover:border-[#292731] hover:text-[#292731]" placeholder="email@company.com"/>
                    </div>

                    <Button>Subscribe to mountly newsletter</Button>


                </div>

            </div>
        </>
    )
}

export default SignUpForm