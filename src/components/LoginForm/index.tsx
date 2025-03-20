import { useState } from "react";
import {TitleLogin, SubTitleLogin} from "../LoginTitle";
import { LoginButton, OptionsButton, ForgotPassword } from "../LoginButton";
import { EmailInput } from "../LoginEntryEmail";
import { PasswordInput } from "../LoginInputPassword";

import { login } from "../../settings/firebase/authService";
import { CreateAccountButton } from "../CreateAccountButton";

type UserData = {
    email: string,
    password: string
};

export default function FormLogin(){
    const [ showPassword, setShowPassword ] = useState<boolean>(false);
    const [ userData, setUserData ] = useState<UserData>({email: "", password: ""});

    // Função responsável pelo botão de exibir ou ocultar senha:
    const togglePasswordVisibility = () => setShowPassword(prev => !prev);

    // Obtendo e atualizando os dados fornecidos do campo de email e senha:
    const handleChange = (field: string, value: string)=>{
        setUserData((prevData)=>({
            ...prevData,
            [field]: value,
        }));
    };

    // Função responsável por realizar a verificação e autenticação do login:
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        
        // Impedir o comportamento padrão do evento:
        event.preventDefault();
        
        try {
            // Obtendo às credencias do usuário: 
            const userCredential = await login(userData?.email, userData?.password);
            console.log('DATA:', userCredential);

            // Verificando se os dados estão corretos:
            if(userCredential?.authentication){
                alert("Login realizado com sucesso!"); // Caso de sucesso - credencias válidas.
            }
            else{
                alert("E-mail ou senha inválidos."); // Caso de erro - credenciais inválidas.  
            }
        } catch (error) {
            alert("Ocorreu um erro inesperado no servidor.");
        }
    };
    

    return (
        <section className="w-[500px] h-[530px] rounded-[30px] flex flex-col container-form-login p-[15px]">
            <TitleLogin />
            <SubTitleLogin />

            <div className="w-full h-[200px]" >
                <form className="w-full h-full flex flex-col gap-[15px]" onSubmit={handleSubmit}>
                    <EmailInput value={userData.email} onChange={(e)=>handleChange("email", e)} />
                    <PasswordInput value={userData.password} onChange={(e)=>handleChange("password", e)} visibility={showPassword} togglePasswordVisibility={togglePasswordVisibility}/>
                    
                    <ForgotPassword />
                    <div className="w-full h-[180px] flex flex-col gap-[25px]">
                        <div className="w-full h-full flex  gap-[10px]">
                            <LoginButton />
                        </div>
                    </div>
                </form>

                <CreateAccountButton />

                <hr className="text-[#d1d1d1]"/>

                <div className="w-full h-[100px] mt-[20px] flex flex-col text-center gap-[15px]">    
                    <p className="w-full h-[20px] text-[14px] text-[#808080]">Outras formas de realizar o login:</p>
                    <OptionsButton />
                </div>

            </div>
        </section>
    );
};