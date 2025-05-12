import apiBeta from "./api/betaAPI";

type DeletePayload = {
  type: 'user' | 'employee';
  id: string;
};

const deleteData = async ({ type, id }: DeletePayload) => {
  try {
    // Se quiser bloquear employee como no update:
    if (type === 'employee') {
      console.warn("Endpoint de employee ainda não está disponível.");
      return { error: "Endpoint de employee não implementado." };
    }

    // console.log(endpoint[type])
    const response = await apiBeta.delete(`/${type}/${id}`);
    return response;

  } catch (error) {
    console.error("Erro ao deletar:", error);
    return { error: "Erro ao conectar com o servidor." };
  }
};

export default deleteData;
