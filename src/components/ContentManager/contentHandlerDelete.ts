import { PropsData } from "../../services/types";
import deleteData from "../../services/userDataDelete"; 

export const handleDelete = async (
  id: string,
  route: string,
  setData: React.Dispatch<React.SetStateAction<PropsData[]>>
) => {
  const confirmDelete = window.confirm("Tem certeza que deseja excluir este usuário?");
  if (!confirmDelete) return;

  try {
    // Mapeamento mais flexível para determinar o tipo de dado:
    const type = route.includes("user") ? "user" : route.includes("employee") ? "employee" : null;
    if (!type) {
      alert("Tipo de dado desconhecido.");
      return;
    }

    // Deleta o item:
    const response = await deleteData({ type, id });

    if (response?.status === 200) {
      setData((prevData) => prevData.filter((user) => user.id !== id));
    } else {
      alert("Erro ao excluir usuário.");
    }
  } catch (error) {
    console.error(error);
    alert("Erro inesperado.");
  }
};

