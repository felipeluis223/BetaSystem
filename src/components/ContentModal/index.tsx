import { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { EmailInput } from "../LoginEntryEmail";
import { NameInput } from "../RegisterAccountName";
import updateData from "../../services/api/Beta/update/users/userDataUpdate";

type RegisterUserModalProps = {
    onClose: () => void;
    selectedUser: {
        id: string;
        name: string;
        email: string;
    } | null; // <- permite que o pai envie null/undefined
};

type RegisterDataProps = {
    id: string;
    name: string;
    email: string;
};

export default function ContentModal({ onClose, selectedUser }: RegisterUserModalProps) {
    const [userData, setUserData] = useState<RegisterDataProps>({
        id: "",
        name: "",
        email: "",
    });

    useEffect(() => {
        if (selectedUser) {
            setUserData({
                id: selectedUser.id,
                name: selectedUser.name,
                email: selectedUser.email,
            });
        }
    }, [selectedUser]);

    const handleChange = (field: string, value: string) => {
        setUserData(prevData => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleUpdateData = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await updateData({
                type: "user",
                data: {
                    id: userData.id,
                    name: userData.name,
                    email: userData.email,
                },
            });

            if (response?.error) {
                alert(response.error);
                return;
            }

            onClose(); // Fecha o modal após a atualização.
        } catch (error) {
            alert("Ocorreu um erro inesperado no servidor.");
        }
    };

    if (!selectedUser) return null;

    return (
        <section className="modal-overlay">
            <div className="modal-content w-[500px] h-[320px] bg-[#f1f1f1] p-[20px] rounded-[10px]">
                <div className="w-full flex justify-between mb-[10px]">
                    <h3 className="text-[1.2rem] font-bold">Formulário de edição</h3>
                    <button className="cursor-pointer" onClick={onClose}>
                        <MdClose className="w-[80px] text-[1.5rem]" />
                    </button>
                </div>

                <span className="text-[#808080] text-[14px]">
                    Edite os dados desejados:
                </span>

                <form
                    onSubmit={handleUpdateData}
                    className="w-full modal-form h-[350px] flex items-center flex-col gap-[15px] mt-[25px]"
                >
                    <NameInput
                        placeholder=""
                        value={userData.name}
                        onChange={value => handleChange("name", value)}
                    />
                    <EmailInput
                        value={userData.email}
                        onChange={value => handleChange("email", value)}
                    />

                    <button
                        type="submit"
                        className="w-[250px] h-[40px] bg-[#040404] text-[#f1f1f1] rounded-md cursor-pointer"
                    >
                        <h2>Atualizar</h2>
                    </button>
                </form>
            </div>
        </section>
    );
}
