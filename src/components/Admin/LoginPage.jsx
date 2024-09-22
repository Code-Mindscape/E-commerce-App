import React from "react";

export default function LoginPage(){

    return(
        <div className='LoginFormForAdmin w-full h-screen  bg-black flex items-center justify-center'>
        <div className="content w-[550px] h-[400px] overflow-hidden flex items-center justify-center rounded-xl bg-white">
            <div className="Formcontent flex flex-col gap-6 w-[100%] px-10 py-10 h-full">
                <div className="textBox h-[20%] w-full flex items-center justify-center ">
                      <h1 className='text-5xl leading-snug font-medium'>Admin Login</h1>
                </div>
                <div className="formBox h-[80%] w-full">
                    <form action="" className="w-full h-full ">
                        <input className="w-[100%] h-[45px] border border-zinc-800/40 mb-3 pl-3 " type="text" name="" placeholder="Username" />
                        <br />
                        <input className="w-[100%] h-[45px] border border-zinc-800/40 mb-3 pl-3 " type="password" name="" placeholder="Password" />
                        <br />
                        <input className="w-[100%] cursor-pointer hover:bg-zinc-900 h-[45px] bg-black text-white mb-4" type="submit" value="Login" />
                    </form>
                </div>

        </div>
    </div>
    </div>
    )

}