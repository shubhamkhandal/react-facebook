import Image from "next/image";
import { signIn } from "next-auth/react";

function Login() {
    return (
        <div className="grid place-items-center h-screen">
            <Image src="https://cdn-icons-png.flaticon.com/512/733/733549.png" width={200} height={200} objectFit="contain"/>
            <div className="">
                <h2 className="text-xl">Login with Facebook</h2>
                <button onClick={signIn} className="text-xl py-2 px-20 rounded-full mt-5 bg-blue-500 text-white w-auto hover:bg-blue-600">Go</button>
            </div>
        </div>
    )
}

export default Login
