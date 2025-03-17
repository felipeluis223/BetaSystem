import { useState } from "react";
import {TitleLogin, SubTitleLogin} from "../TitleLogin";
import { ButtonLogin, ButtonOptions, ForgotPassword } from "../ButtonLogin";

export default function FormLogin(){
    const [ showPassword, setShowPassword ] = useState<boolean>(false);

    const togglePasswordVisibility = () => setShowPassword(prev => !prev);

    return (
        <section className="w-[500px] h-[500px] rounded-[30px] flex flex-col container-form-login p-[15px]">
            <TitleLogin />
            <SubTitleLogin />

            <form className="w-full h-[450px] flex flex-col gap-[15px]">
                <input 
                    type="text" 
                    className="w-full h-[50px] p-[10px] outline-none rounded-md border border-[#d6d6d6]" 
                    placeholder="exemple@email.com"
                 />

                <div className="w-full h-[50px] p-[10px] flex flex-row justify-center rounded-md border border-[#d6d6d6]">
                    <input 
                        type={showPassword ? "text" : "password"} 
                        className="w-[80%] h-full outline-none"
                        placeholder="***********"
                    />

                    <button className="w-[20%] h-full text-[#808080] font-bold cursor-pointer" onClick={togglePasswordVisibility}>
                        {
                            showPassword ? "Ocultar" : "Mostrar"
                        }
                    </button>
                </div>
                
                <ForgotPassword />
                <div className="w-full h-[220px] flex flex-col gap-[25px]">
                    <ButtonLogin />

                    <hr className="text-[#d1d1d1]"/>
                    
                    <div className="w-full h-[120px] flex flex-col gap-[15px]">    
                        <p className="w-full h-[20px] text-[15px] text-[#808080]">Outras formas de realizar o login:</p>
                        <ButtonOptions />
                    </div>
                </div>
            </form>

        </section>
    );
};