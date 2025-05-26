import apiBeta from "../betaAPI";

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

    const urlRaw = endpoint[payload.type];
    const payloadId = payload.data.id;
    const url = urlRaw + "/" + payloadId; 

    console.log("url: ", url)
    const response = await apiBeta.put(url, payload.data);
    return response;
    
  } catch (error) {
    return { error: "Erro ao conectar com o servidor." };
  }
};

export default updateData;
