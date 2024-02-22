import OtpForm from "@/modules/Auth/otp_auth/OtpForm";

export default function OtpAuthPage () {
    return (
        <>
            <div className="flex justify-center items-center h-dvh" style={{ backgroundImage: 'url("/images/auth/bg_auth.svg")'}}>
                <div className="rounded-xl h-[40rem] w-[30rem] bg-white shadow-xl ">
                    <OtpForm/>
                </div>
            </div>
        </>
    )
}