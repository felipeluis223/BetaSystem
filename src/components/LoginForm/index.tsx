import { useState } from "react";
import { TitleLogin, SubTitleLogin } from "../LoginTitle";
import { LoginButton, ForgotPassword } from "../LoginButton";
import { EmailInput } from "../LoginEntryEmail";
import { PasswordInput } from "../LoginInputPassword";
import { RegisterAccountButton } from "../RegisterAccountButton";
import RegisterUserModal from "../RegisterAccountForm";

import loginAPI from "./login";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/authSlice";

// Google Login
import { GoogleLogin } from '@react-oauth/google';
import apiBeta from "../../services/betaAPI";

type UserData = {
    email: string;
    password: string;
};

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [userData, setUserData] = useState<UserData>({ email: "", password: "" });
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const togglePasswordVisibility = () => setShowPassword(prev => !prev);

    const handleChange = (field: string, value: string) => {
        setUserData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleGoogleSuccess = async (credentialResponse: any) => {
        try {
            if (credentialResponse.credential) {
                // Enviar o token do Google para o backend usando axios:
                const response = await apiBeta.post("/auth/google", {
                    token: credentialResponse.credential
                });

                // Verificar se o backend retornou o JWT:
                if (response.data.token) {

                    // Armazenar o token JWT retornado pelo backend:
                    dispatch(setToken(response.data.token));

                    // Redirecionar para a página inicial ou outra página
                    navigate("/home");
                } else {
                    console.error("Erro ao autenticar no backend.");
                }
            }
        } catch (error) {
            console.error("Erro ao realizar login com o Google:", error);
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const userToken = await loginAPI({
                email: userData.email,
                password: userData.password
            });

            if (userToken != null) {
                dispatch(setToken(userToken));

                setUserData({ email: "", password: "" });

                navigate("/home");
            } else {
                alert("Houve um problema no login. Verifique suas informações e tente novamente.");
            }
        } catch (e) {
            alert("Ocorreu um erro inesperado no servidor.");
        }
    };

    return (
        <>
            <section className="w-full md:w-[500px]  h-[530px] rounded-[30px] flex flex-col container-form-login p-[15px]">
                <TitleLogin />
                <SubTitleLogin />

                <div className="w-full h-[200px]">
                    <form className="w-full h-full flex flex-col gap-[15px]" onSubmit={handleSubmit}>
                        <EmailInput
                            value={userData.email}
                            onChange={(e) => handleChange("email", e)}
                        />
                        <PasswordInput
                            placeholder="********"
                            value={userData.password}
                            onChange={(e) => handleChange("password", e)}
                            visibility={showPassword}
                            togglePasswordVisibility={togglePasswordVisibility}
                        />

                        <ForgotPassword />
                        <div className="w-full h-[180px] flex flex-col gap-[25px]">
                            <div className="w-full h-full flex justify-center md:justify-start gap-[10px]">
                                <LoginButton />
                            </div>
                        </div>
                    </form>

                    <RegisterAccountButton onClick={() => setIsModalOpen(true)} />

                    <hr className="text-[#d1d1d1]" />

                    <div className="w-full h-[100px] mt-[20px] flex flex-col text-center gap-[15px]">
                        <div className="flex justify-center mt-[15px]">
                            <GoogleLogin
                                onSuccess={handleGoogleSuccess}  // Chama a função handleGoogleSuccess no sucesso
                                onError={() => console.log("Erro ao fazer login com o Google")}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {
                isModalOpen && <RegisterUserModal onClose={() => setIsModalOpen(false)} />
            }
        </>
    );
}
