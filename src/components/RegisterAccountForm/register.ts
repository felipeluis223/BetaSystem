import apiBeta from "../../services/betaAPI";

interface RegisterResponse {
    id: number;
    name: string;
    email: string;
    password: string;
    updateAt: string;
    createdAt: string;
};

interface RegisterData {
    name: string;
    email: string;
    password: string;
}

const registerAPI = async (data:RegisterData): Promise<string | null>=>{
    try{
        const response = await apiBeta.post<RegisterResponse>("/users", data);
        console.log('Data: ', response);
        return response.statusText;

    }catch(e){
        console.log('erro: ', e)
        return null;
    }

};


export default registerAPI;
