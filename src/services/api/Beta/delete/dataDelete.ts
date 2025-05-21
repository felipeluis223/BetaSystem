import apiBeta from "../betaAPI";

type DeletePayload = {
  type: 'user' | 'employee';
  id: string;
};

const deleteData = async ({ type, id }: DeletePayload) => {
  try {
    
    const response = await apiBeta.delete(`/${type}/${id}`);
    return response;

  } catch (error) {
    console.error("Erro ao deletar:", error);
    return { error: "Erro ao conectar com o servidor." };
  }
};

export default deleteData;
