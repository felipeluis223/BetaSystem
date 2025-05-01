import apiBeta from "../../services/betaAPI";

type PayloadType =   
  | { type: 'user'; data: { id: string, name: string; email: string } }
  | { type: 'employee'; data: { name: string; email: string; phone: string; address?: string } }; // Futuro suporte a 'employee'

function handlePayload(payload: PayloadType) {
  if (payload.type === 'user') {
    console.log('User payload:', payload.data);
  } else if (payload.type === 'employee') {
    console.log('Employee payload:', payload.data);
  }
}

const updateData = async (payload: PayloadType) => {
  try {
    const endpoint = payload.type === 'user' ? "/users" : "/employees";
    console.log(endpoint)
    if (payload.type === 'employee') {
      console.warn("Endpoint de employee ainda não está disponível.");
      return { error: "Endpoint de employee não implementado." };
    }

    const response = await apiBeta.put(endpoint, payload.data);
    console.log(response)
    return response;
  } catch (error) {
    return { error: "Erro ao conectar com o servidor." };
  }
};

export default updateData;
