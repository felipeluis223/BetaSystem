import apiBeta from "../../services/betaAPI";

interface ContentResponse {
    data: string[];
};

interface ContentData {
    route: string;
};

const contentAPI = async ({ route }: ContentData): Promise<string[] | null> => {
    try {
        const response = await apiBeta.get<ContentResponse>(`${route}`);
        console.log('resposta: ', response)
        return response.data;
    } catch (e) {
        console.log("error: ", e);
        return null;
    }
};

export default contentAPI;
