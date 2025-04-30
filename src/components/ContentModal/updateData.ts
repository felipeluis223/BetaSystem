import apiBeta from "../../services/betaAPI";

type PayloadType =   
  | { type: 'user'; data: { name: string; email: string } }
  | { type: 'employee'; data: { name: string; email: string; phone: string; address?: string } }; // O employee ainda não está no backend.

function handlePayload(payload: PayloadType) {
  if (payload.type === 'user') {
    console.log('User payload:', payload.data);
  } else if (payload.type === 'employee') {
    console.log('Employee payload:', payload.data);
  }
}

const updateData = async (payload: PayloadType) => {
  try {
    // Exemplo: você pode mudar a rota dependendo do tipo
    const endpoint = payload.type === 'user' ? "/users" : "/employees";

    // Como ainda não há endpoint de employee, evite chamar API nesse caso
    if (payload.type === 'employee') {
      console.warn("Endpoint de employee ainda não está disponível.");
      return { error: "Endpoint de employee não implementado." };
    }

    const response = await apiBeta.put(endpoint, payload.data);
    return response;
  } catch (error) {
    return error;
  }
};

export default updateData;
