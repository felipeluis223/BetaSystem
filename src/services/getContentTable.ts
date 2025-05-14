import apiBeta from "./api/Beta/betaAPI";

interface ContentResponse {
    data: string[];
};

interface ContentData {
    route: string;
};

const contentAPI = async ({ route }: ContentData): Promise<string[] | null> => {
    try {
        const response = await apiBeta.get<ContentResponse>(`${route}`);
        return response.data;
    } catch (e) {
        // .log("error: ", e);
        return null;
    }
};

export default contentAPI;
