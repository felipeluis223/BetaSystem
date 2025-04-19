import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
import { useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/authSlice";

// Botão de "Esqueci a senha":
export function ForgotPassword(){
    return <button type="button" className="w-full text-[11px] flex cursor-pointer hover:text-[#4444c9]">Esqueceu a senha?</button>
};

// Botão para realizar o login:
export function LoginButton(){
    return (
        <button className="w-[250px] h-[40px] bg-[#040404] text-[#f1f1f1] rounded-md cursor-pointer">
            <h2>Login</h2>
        </button>
    );
};

// Botões de outras maneiras de realizar o login (Google, Facebook e Apple):
export function OptionsButton(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loginWithGoogle = useGoogleLogin({
        onSuccess: (tokenResponse) => {
          const { access_token } = tokenResponse;
          dispatch(setToken(access_token));
          navigate("/home");
        },
        onError: () => {
          console.log("Erro ao fazer login com o Google");
        },
        flow: 'implicit',
        ux_mode: 'redirect'
      });

    return (
        <div className="w-full h-[50px]">
            <ul className="text-[2rem] flex items-center justify-center w-full h-full gap-[20px]">
                <li><button type="button" className="cursor-pointer" onClick={loginWithGoogle}><FcGoogle /></button></li>
                <li className="text-[#1877f2]"><button type="button" className="cursor-pointer"><FaFacebook /></button></li>
                <li><button type="button" className="cursor-pointer"><FaApple className="text-[#000000]" /></button></li>
            </ul>
        </div>
    );
};