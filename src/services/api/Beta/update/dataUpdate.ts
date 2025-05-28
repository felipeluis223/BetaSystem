import apiBeta from "../betaAPI";

type PayloadType =   
  | { 
      type: 'user'; 
      data: { 
        id: string; 
        name: string; 
        email: string; 
      }; 
    }
  | { 
      type: 'employee'; 
      data: { 
        id: string; 
        name: string; 
        email: string; 
        phone: string; 
        address?: string; 
      }; 
    };

const updateData = async (payload: PayloadType) => {

  try {
    const url = `${payload.type}/${payload.data.id}`;
    const response = await apiBeta.put(url, payload.data);
    return response;
    
  } catch (error) {
    console.error("Erro na requisição:", error);
    return { error: "Erro ao conectar com o servidor." };
  }
};

export default updateData;
