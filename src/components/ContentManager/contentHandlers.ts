// src/components/ContentManager/contentHandlers.ts
import { PropsData } from "./types"; // ou ajuste o caminho conforme necessário

export const handleDelete = (
  id: string,
  setData: React.Dispatch<React.SetStateAction<PropsData[]>>
) => {
  const confirmDelete = window.confirm("Tem certeza que deseja excluir este usuário?");
  if (confirmDelete) {
    setData((prevData) => prevData.filter((user) => user.id !== id));
  }
};

export const handleUpdate = (
  id: string,
  data: PropsData[],
  setSelectedUser: React.Dispatch<React.SetStateAction<PropsData | null>>,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const userToUpdate = data.find((user) => user.id === id);
  if (userToUpdate) {
    setSelectedUser(userToUpdate);
    setShowModal(true);
  }
};
