import deleteData from "../../services/api/Beta/delete/users/userDataDelete"; 
import routeType from "../../utils/routeType";

export const handleDelete = async (
  id: string,
  route: string
): Promise<boolean> => {
  const confirmDelete = window.confirm("Tem certeza que deseja excluir este usuário?");
  if (!confirmDelete) return false;

  try {
    const type = routeType({ describle: route });

    if (!type) {
      alert("Tipo de dado desconhecido.");
      return false;
    }

    const response = await deleteData({ type, id });

    if (response?.status === 200) {
      return true; // Sucesso
    } else {
      alert("Erro ao excluir usuário.");
      return false;
    }
  } catch (error) {
    console.error(error);
    alert("Erro inesperado.");
    return false;
  }
};
