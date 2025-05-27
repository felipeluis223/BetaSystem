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
    const endpoint = {
      user: "/users",
      employee: "/employees"
    } as const;

    const urlRaw = endpoint[payload.type];

    if (!urlRaw) {
      throw new Error(`Endpoint não encontrado para o tipo: ${payload.type}`);
    }

    const url = `${urlRaw}/${payload.data.id}`;

    console.log("URL gerada:", url);
    console.log(payload.data)

    const response = await apiBeta.put(url, payload.data);

    return response;
    
  } catch (error) {
    console.error("Erro na requisição:", error);
    return { error: "Erro ao conectar com o servidor." };
  }
};

export default updateData;
