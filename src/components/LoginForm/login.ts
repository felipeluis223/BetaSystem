import apiBeta from "../../services/betaAPI";

// Informações esperadas pelo retorno da API:
interface LoginResponse {
    token: string;
};

interface LoginData {
    email: string;
    password: string;
}

// Informações passadas para API para realizarmos o login:
const loginAPI = async (data:LoginData): Promise<string | null>=>{
    try{
        const token = await apiBeta.post<LoginResponse>("/login", data);
        return token.data.token;

    }catch(e){
        console.log('erro: ', e)
        return null;
    }

};


export default loginAPI;
