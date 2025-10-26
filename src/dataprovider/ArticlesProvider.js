import {api} from './DataProvider.js'

export const ArticlesProvider = {

    getArticlesList: async () => {
        try{
            const response = await api.get('/blog/');
            return response.data;
        } catch (error){
            return error;
        }
    }
}