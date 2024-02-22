import ForgotPasswordForm from "@/modules/Auth/forgot-pass-form/ForgotPassForm";

export default function ForgotPasswordPage () {
    return (
        <>
            <div className="flex justify-center items-center h-dvh" style={{ backgroundImage: 'url("/images/auth/bg_auth.svg")'}}>
                <div className="rounded-xl h-[40rem] w-[30rem] bg-white shadow-xl ">
                    <ForgotPasswordForm/>
                </div>
            </div>
        </>
    )
}