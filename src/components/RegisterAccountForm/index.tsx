import { useState } from "react";
import { MdClose } from "react-icons/md";
import { EmailInput } from "../LoginEntryEmail";
import { PasswordInput } from "../LoginInputPassword";
import { NameInput } from "../RegisterAccountName";
import registerAPI from "./register";

type RegisterUserModalProps = {
    onClose: () => void;
};

type RegisterDataProps = {
    name: string;
    email: string;
    password: string;
};

export default function RegisterUserModal({ onClose }: RegisterUserModalProps) {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [userData, setUserData] = useState<RegisterDataProps>({ email: "", password: "", name: "" });

    const handleChange = (field: string, value: string) => {
        setUserData(prevData => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleRegisterData = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            // Obtendo as credenciais do usuário
            const res = await registerAPI({
                "name": userData.name,
                "email": userData.email,
                "password": userData.password
            });

            if(res?.status === 201){
                onClose(); // Fecha o modal após o cadastro
                alert("Cadastro realizado com sucesso!");
            }   
            else{
                alert(res.response.data.message)
            }

        } catch (error) {
            alert("Ocorreu um erro inesperado no servidor.");
        }
    };

    return (
        <section className="modal-overlay">
            <div className="modal-content w-[500px] h-[500px] bg-[#f1f1f1] p-[20px] rounded-[10px]">
                <div className="w-full flex justify-between mb-[10px]">
                    <h3 className="text-[1.2rem] font-bold">Cadastre-se no Beta</h3>
                    <button className="cursor-pointer" onClick={onClose}>
                        <MdClose className="w-[80px] text-[1.5rem]" />
                    </button>
                </div>

                <span className="text-[#808080] text-[14px]">
                    Cadastre-se para acessar todos os recursos exclusivos.
                </span>

                <form
                    onSubmit={handleRegisterData}
                    className="w-full modal-form h-[350px] flex items-center flex-col gap-[15px] mt-[25px]"
                >
                    <NameInput 
                        value={userData.name} 
                        onChange={value => handleChange("name", value)} 
                        placeholder="Digite o nome"
                    />
                    <EmailInput value={userData.email} onChange={value => handleChange("email", value)} />
                    <PasswordInput
                        placeholder="**********"
                        value={userData.password}
                        onChange={value => handleChange("password", value)}                         visibility={showPassword}
                        togglePasswordVisibility={() => setShowPassword(prev => !prev)} 
                    />

                    <span className="text-[#808080] text-[12px] text-center">
                        Ao se cadastrar, você concorda com nossos{" "}
                        <u className="cursor-pointer">
                            Termos, <br /> Política de Privacidade e Política de Cookies
                        </u>.
                    </span>

                    <button
                        type="submit"
                        className="w-[250px] h-[40px] bg-[#040404] text-[#f1f1f1] rounded-md cursor-pointer"
                    >
                        <h2>Cadastre-se</h2>
                    </button>
                </form>
            </div>
        </section>
    );
}
