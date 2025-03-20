import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";

export function ForgotPassword(){
    return <button type="button" className="w-full text-[11px] flex cursor-pointer hover:text-[#4444c9]">Esqueceu a senha?</button>
};

export function LoginButton(){
    return (
        <button className="w-[250px] h-[40px] bg-[#040404] text-[#f1f1f1] rounded-md cursor-pointer">
            <h2>Login</h2>
        </button>
    );
};

export function CreateAccountButton(){
    return (
        <button className="w-[200px] h-[40px] text-[13px] text-[#808080] rounded-md cursor-pointer hover:text-[#4444c9]">
            <p>Não tem conta? Cadastra-se</p>
        </button>
    );
};

export function OptionsButton(){
    return (
        <div className="w-full h-[50px]">
            <ul className="text-[2rem] flex items-center w-full h-full gap-[20px]">
                <li><button type="button" className="cursor-pointer"><FcGoogle /></button></li>
                <li className="text-[#1877f2]"><button type="button" className="cursor-pointer"><FaFacebook /></button></li>
                <li><button type="button" className="cursor-pointer"><FaApple className="text-[#000000]" /></button></li>
            </ul>
        </div>
    );
};