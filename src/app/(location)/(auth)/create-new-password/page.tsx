import NewPasswordForm from "@/modules/Auth/new-password-form/NewPasswordForm";

export default function CreateNewPasswordPage () {
    return (
        <>
        <div className="flex justify-center items-center h-dvh" style={{ backgroundImage: 'url("/images/auth/bg_auth.svg")'}}>
            <div className="rounded-xl h-[40rem] w-[30rem] bg-white shadow-xl ">
                <NewPasswordForm/>
            </div>
        </div>
    </>
    )
}