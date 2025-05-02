import apiBeta from "../../services/betaAPI";

type PayloadType =   
  | { 
      type: 'user'; 
      data: { 
        id: string, 
        name: string; 
        email: string 
      } 
    }
  | { 
      type: 'employee'; 
      data: { 
        name: string; 
        email: string; 
        phone: string; 
        address?: string 
      } 
    };

const updateData = async (payload: PayloadType) => {
  try {
    const endpoint = {
      user: "/users",
      employee: "/employees"
    };

    if (payload.type === 'employee') {
      console.warn("Endpoint de employee ainda não está disponível.");
      return { error: "Endpoint de employee não implementado." };
    }

    const response = await apiBeta.put(endpoint[payload.type], payload.data);
    return response;
    
  } catch (error) {
    return { error: "Erro ao conectar com o servidor." };
  }
};

export default updateData;
