import { PropsData } from "../../services/types";
import deleteData from "../../services/api/Beta/delete/users/userDataDelete"; 
import routeType from "../../utils/routeType";

export const handleDelete = async (
  id: string,
  route: string,
  setData: React.Dispatch<React.SetStateAction<PropsData[]>>
) => {
  const confirmDelete = window.confirm("Tem certeza que deseja excluir este usuário?");
  if (!confirmDelete) return;

  try {
    // Mapeamento mais flexível para determinar o tipo de dado:
    const type = routeType({ describle: route });

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

