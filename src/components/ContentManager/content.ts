import apiBeta from "../../services/betaAPI";

interface ContentReponse {
    data: string[],
};

interface ContentData {
    route: string,
};

const contentAPI = async(route:ContentData):Promise<string | null> =>{
    try{
        const response = await apiBeta.get<ContentReponse>(`/${route}`);
        console.log(response);
        // return response.data.data; // retorna o array de strings
    }
    catch(e){
        console.log("error: ", e);
        return null;
    }

};

export default contentAPI;