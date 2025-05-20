import { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import updateData from "../../services/api/Beta/update/users/userDataUpdate";

type RegisterUserModalProps = {
  onClose: () => void;
  selectedUser: Record<string, any> | null; // Agora aceita qualquer objeto
};

export default function ContentModal({ onClose, selectedUser }: RegisterUserModalProps) {
  const [formData, setFormData] = useState<Record<string, any>>({});

  useEffect(() => {
    if (selectedUser) {
      setFormData(selectedUser);
    }
  }, [selectedUser]);

  const handleChange = (key: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleUpdateData = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await updateData({
        type: "user", // ou "funcionario", se você quiser parametrizar isso também
        data: formData,
      });

      if (response?.error) {
        alert(response.error);
        return;
      }

      onClose(); // Fecha o modal após sucesso
    } catch (error) {
      alert("Ocorreu um erro inesperado no servidor.");
    }
  };

  if (!selectedUser) return null;

  return (
    <section className="modal-overlay">
      <div className="modal-content w-[500px] min-h-[350px] bg-[#f1f1f1] p-[20px] rounded-[10px]">
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
          className="w-full modal-form flex flex-col gap-[15px] mt-[25px]"
        >
          {Object.entries(formData).map(([key, value]) => (
            <div key={key} className="flex flex-col w-full">
              <label className="text-sm font-medium mb-1 capitalize">{key}</label>
              {typeof value === "number" ? (
                <input
                  type="number"
                  value={value}
                  onChange={e => handleChange(key, Number(e.target.value))}
                  className="border p-2 rounded"
                />
              ) : typeof value === "boolean" ? (
                <input
                  type="checkbox"
                  checked={value}
                  onChange={e => handleChange(key, e.target.checked)}
                  className="w-5 h-5"
                />
              ) : (
                <input
                  type="text"
                  value={value}
                  onChange={e => handleChange(key, e.target.value)}
                  className="border p-2 rounded"
                />
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-[250px] h-[40px] bg-[#040404] text-[#f1f1f1] rounded-md cursor-pointer self-center"
          >
            <h2>Atualizar</h2>
          </button>
        </form>
      </div>
    </section>
  );
}
