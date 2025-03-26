import apiBeta from "../../services/betaAPI";

interface LoginResponse {
    token: string;
};

interface LoginData {
    email: string;
    password: string;
}

const loginAPI = async (data:LoginData): Promise<string | null>=>{
    try{
        const token = await apiBeta.post<LoginResponse>("/login", data);
        console.log('TOKEN: ', token);
        return token.data.token;

    }catch(e){
        console.log('erro: ', e)
        return null;
    }

};


export default loginAPI;
